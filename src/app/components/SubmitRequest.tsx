import { useState } from 'react';
import { Wrench, Leaf, Upload } from 'lucide-react';

export function SubmitRequest() {
  const [requestType, setRequestType] = useState<'repair' | 'landscaping'>('repair');
  const [priority, setPriority] = useState('normal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setDescription('');
      setPriority('normal');
    }, 3000);
  };

  return (
    <div>
      <h2 className="text-2xl mb-6">Submit New Request</h2>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
          Request submitted successfully! We'll review it shortly.
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Request Type */}
          <div>
            <label className="block text-gray-700 mb-3">Request Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRequestType('repair')}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                  requestType === 'repair'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Wrench className={`h-6 w-6 ${requestType === 'repair' ? 'text-blue-600' : 'text-gray-400'}`} />
                <div className="text-left">
                  <div className="text-gray-900">Repair/Maintenance</div>
                  <div className="text-sm text-gray-600">Plumbing, electrical, HVAC, etc.</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('landscaping')}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                  requestType === 'landscaping'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Leaf className={`h-6 w-6 ${requestType === 'landscaping' ? 'text-blue-600' : 'text-gray-400'}`} />
                <div className="text-left">
                  <div className="text-gray-900">Landscaping</div>
                  <div className="text-sm text-gray-600">Lawn care, trimming, etc.</div>
                </div>
              </button>
            </div>
          </div>

          {/* Priority Level */}
          <div>
            <label htmlFor="priority" className="block text-gray-700 mb-2">
              Priority Level
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="low">Low - Can wait</option>
              <option value="normal">Normal - Standard request</option>
              <option value="high">High - Needs attention soon</option>
              <option value="emergency">Emergency - Immediate attention required</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 mb-2">
              Request Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Kitchen sink leaking"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Please provide details about the issue..."
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-2">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Click to upload photos or documents</p>
              <p className="text-sm text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Specific Location (Optional)
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Master bathroom, Front yard"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
