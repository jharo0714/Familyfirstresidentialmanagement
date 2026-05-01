import { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Wrench, Leaf, Filter } from 'lucide-react';

const mockAllRequests = [
  {
    id: 2850,
    type: 'repair',
    title: 'Water heater not working',
    description: 'No hot water in the unit since this morning.',
    status: 'pending',
    priority: 'emergency',
    submittedDate: 'May 1, 2026',
    tenant: 'Mike Williams',
    property: '789 Pine Rd, Apt 1A',
  },
  {
    id: 2849,
    type: 'repair',
    title: 'Electrical outlet sparking',
    description: 'Outlet in bedroom is sparking when plugging in devices.',
    status: 'pending',
    priority: 'high',
    submittedDate: 'April 30, 2026',
    tenant: 'Sarah Johnson',
    property: '456 Oak Ave, Unit 2',
  },
  {
    id: 2847,
    type: 'repair',
    title: 'Kitchen sink leaking',
    description: 'The kitchen sink has a slow leak underneath.',
    status: 'in-progress',
    priority: 'high',
    submittedDate: 'April 28, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
    assignedTo: 'Jim the Plumber',
  },
  {
    id: 2845,
    type: 'landscaping',
    title: 'Front yard overgrown',
    description: 'Bushes need trimming and lawn needs mowing.',
    status: 'pending',
    priority: 'normal',
    submittedDate: 'April 25, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
  },
  {
    id: 2834,
    type: 'landscaping',
    title: 'Front yard trimming',
    description: 'Regular maintenance - trim hedges.',
    status: 'completed',
    priority: 'normal',
    submittedDate: 'April 10, 2026',
    completedDate: 'April 15, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
  },
];

export function ManageRequests() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

  const filteredRequests = mockAllRequests.filter(
    (req) => statusFilter === 'all' || req.status === statusFilter
  );

  const selectedReq = mockAllRequests.find((r) => r.id === selectedRequest);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Manage Requests</h2>

        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              onClick={() => setSelectedRequest(request.id)}
              className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${
                selectedRequest === request.id ? 'ring-2 ring-blue-600' : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  request.type === 'repair'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {request.type === 'repair' ? (
                    <Wrench className="h-5 w-5" />
                  ) : (
                    <Leaf className="h-5 w-5" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base">{request.title}</h3>
                    {request.priority === 'emergency' && (
                      <span className="px-2 py-0.5 bg-red-600 text-white rounded text-xs">
                        Emergency
                      </span>
                    )}
                    {request.priority === 'high' && (
                      <span className="px-2 py-0.5 bg-orange-500 text-white rounded text-xs">
                        High
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{request.tenant}</p>
                  <p className="text-xs text-gray-500">{request.property}</p>

                  <div className="flex items-center gap-2 mt-2">
                    {request.status === 'pending' && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        <Clock className="h-3 w-3" />
                        Pending
                      </span>
                    )}
                    {request.status === 'in-progress' && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <AlertCircle className="h-3 w-3" />
                        In Progress
                      </span>
                    )}
                    {request.status === 'completed' && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        <CheckCircle className="h-3 w-3" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Request Details Panel */}
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 h-fit">
          {selectedReq ? (
            <div>
              <h3 className="text-xl mb-4">Request Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Request ID</p>
                  <p className="text-lg">#{selectedReq.id}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Title</p>
                  <p className="text-lg">{selectedReq.title}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Description</p>
                  <p className="text-gray-900">{selectedReq.description}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Tenant</p>
                  <p className="text-gray-900">{selectedReq.tenant}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Property</p>
                  <p className="text-gray-900">{selectedReq.property}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Priority</p>
                  <p className="text-gray-900 capitalize">{selectedReq.priority}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Submitted Date</p>
                  <p className="text-gray-900">{selectedReq.submittedDate}</p>
                </div>

                {selectedReq.assignedTo && (
                  <div>
                    <p className="text-sm text-gray-600">Assigned To</p>
                    <p className="text-gray-900">{selectedReq.assignedTo}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <label htmlFor="status-update" className="block text-gray-700 mb-2">
                    Update Status
                  </label>
                  <select
                    id="status-update"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
                    defaultValue={selectedReq.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>

                  <label htmlFor="notes" className="block text-gray-700 mb-2">
                    Add Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
                    placeholder="Add notes about this request..."
                  ></textarea>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              Select a request to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
