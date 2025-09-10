import React, { useEffect, useMemo, useState } from 'react';

export const DevKeyPanel: React.FC = () => {
  const isDev = (import.meta as any)?.env?.DEV;
  const [open, setOpen] = useState<boolean>(false);
  const [key, setKey] = useState('');
  const hasKey = useMemo(() => {
    try {
      return Boolean(localStorage.getItem('GEMINI_API_KEY'));
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (!isDev) setOpen(false);
  }, [isDev]);

  if (!isDev) return null;

  const save = () => {
    try {
      if (!key) return;
      localStorage.setItem('GEMINI_API_KEY', key);
      setKey('');
      // Soft prompt to reload so importers re-resolve
      // eslint-disable-next-line no-alert
      alert('Key saved locally for dev. Reloading...');
      location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const clear = () => {
    try {
      localStorage.removeItem('GEMINI_API_KEY');
      // eslint-disable-next-line no-alert
      alert('Removed local key. Reloading...');
      location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow hover:bg-slate-800"
        >
          Dev Key{hasKey ? ' ✓' : ''}
        </button>
      )}
      {open && (
        <div className="w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-slate-700">Developer Settings</h4>
            <button className="text-slate-500 text-sm" onClick={() => setOpen(false)}>Close</button>
          </div>
          <p className="text-xs text-slate-500 mb-3">
            Paste a Gemini API key for local testing. Do not use in production.
          </p>
          <input
            type="password"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            placeholder="VITE_GEMINI_API_KEY"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <button onClick={save} className="bg-blue-600 text-white text-sm font-semibold px-3 py-2 rounded-md hover:bg-blue-700">Save</button>
            <button onClick={clear} className="bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-2 rounded-md hover:bg-slate-200">Clear</button>
          </div>
        </div>
      )}
    </div>
  );
};

