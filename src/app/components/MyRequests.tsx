import { Clock, CheckCircle, AlertCircle, Wrench, Leaf } from 'lucide-react';

interface MyRequestsProps {
  userType: 'tenant' | 'admin';
}

const mockRequests = [
  {
    id: 2847,
    type: 'repair',
    title: 'Kitchen sink leaking',
    description: 'The kitchen sink has a slow leak underneath. Water is dripping into the cabinet.',
    status: 'in-progress',
    priority: 'high',
    submittedDate: 'April 28, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
  },
  {
    id: 2845,
    type: 'landscaping',
    title: 'Front yard overgrown',
    description: 'The bushes in the front yard need trimming and the lawn needs mowing.',
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
    description: 'Regular maintenance - trim hedges and edge the walkway.',
    status: 'completed',
    priority: 'normal',
    submittedDate: 'April 10, 2026',
    completedDate: 'April 15, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
  },
  {
    id: 2830,
    type: 'repair',
    title: 'HVAC making noise',
    description: 'The heating system is making a rattling sound when it turns on.',
    status: 'completed',
    priority: 'normal',
    submittedDate: 'April 5, 2026',
    completedDate: 'April 8, 2026',
    tenant: 'John Doe',
    property: '123 Maple St, Apt 4B',
  },
];

export function MyRequests({ userType }: MyRequestsProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            <Clock className="h-4 w-4" />
            Pending
          </span>
        );
      case 'in-progress':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            <AlertCircle className="h-4 w-4" />
            In Progress
          </span>
        );
      case 'completed':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            <CheckCircle className="h-4 w-4" />
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'emergency':
        return <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Emergency</span>;
      case 'high':
        return <span className="px-2 py-1 bg-orange-500 text-white rounded text-xs">High</span>;
      case 'normal':
        return <span className="px-2 py-1 bg-gray-400 text-white rounded text-xs">Normal</span>;
      case 'low':
        return <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded text-xs">Low</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-6">My Requests</h2>

      <div className="space-y-4">
        {mockRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  request.type === 'repair'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {request.type === 'repair' ? (
                    <Wrench className="h-6 w-6" />
                  ) : (
                    <Leaf className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg">{request.title}</h3>
                    {getPriorityBadge(request.priority)}
                  </div>
                  <p className="text-gray-600 mb-2">{request.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Request #{request.id}</span>
                    <span>•</span>
                    <span>Submitted: {request.submittedDate}</span>
                    {request.completedDate && (
                      <>
                        <span>•</span>
                        <span>Completed: {request.completedDate}</span>
                      </>
                    )}
                  </div>
                  {userType === 'admin' && (
                    <div className="text-sm text-gray-600 mt-2">
                      <span>{request.tenant} - {request.property}</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {getStatusBadge(request.status)}
              </div>
            </div>

            {request.status !== 'completed' && userType === 'tenant' && (
              <div className="pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:underline text-sm">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
