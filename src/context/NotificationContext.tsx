import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  type: NotificationType;
  title?: string;
  message: string;
  duration?: number;
}

interface NotificationContextProps {
  showNotification: (type: NotificationType, message: string, title?: string, duration?: number) => void;
  showSuccess: (message: string, title?: string) => void;
  showError: (message: string, title?: string, duration?: number) => void;
  showWarning: (message: string, title?: string, duration?: number) => void;
  showInfo: (message: string, title?: string) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showNotification = useCallback(
    (type: NotificationType, message: string, title?: string, duration = 6000) => {
      const id = `${Date.now()}-${Math.random()}`;
      setNotifications((prev) => [...prev, { id, type, message, title, duration }]);

      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }
    },
    [removeNotification]
  );

  const showSuccess = useCallback((message: string, title = 'Success!') => {
    showNotification('success', message, title, 5000);
  }, [showNotification]);

  const showError = useCallback((message: string, title = 'Error Occurred', duration = 10000) => {
    showNotification('error', message, title, duration);
  }, [showNotification]);

  const showWarning = useCallback((message: string, title = 'Warning', duration = 8000) => {
    showNotification('warning', message, title, duration);
  }, [showNotification]);

  const showInfo = useCallback((message: string, title = 'Info') => {
    showNotification('info', message, title, 5000);
  }, [showNotification]);

  return (
    <NotificationContext.Provider value={{ showNotification, showSuccess, showError, showWarning, showInfo }}>
      {children}
      {/* Toast Render Node */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 w-full max-w-md pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {notifications.map((notif) => {
            const isSuccess = notif.type === 'success';
            const isError = notif.type === 'error';
            const isWarning = notif.type === 'warning';
            const isInfo = notif.type === 'info';

            return (
              <motion.div
                key={notif.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                className={`pointer-events-auto flex items-start gap-3.5 p-4 rounded-xl border shadow-xl w-full select-none backdrop-blur-md ${
                  isSuccess
                    ? 'bg-emerald-50/95 border-emerald-200/85 text-emerald-900 shadow-emerald-100/50'
                    : isError
                    ? 'bg-rose-50/95 border-rose-200/85 text-rose-900 shadow-rose-100/50'
                    : isWarning
                    ? 'bg-amber-50/95 border-amber-200/85 text-amber-900 shadow-amber-100/50'
                    : 'bg-slate-50/95 border-slate-200/85 text-slate-900 shadow-slate-100/50'
                }`}
              >
                {/* Icon Column */}
                <div className="shrink-0 pt-0.5">
                  {isSuccess && <CheckCircle className="w-5 h-5 text-emerald-600 animate-bounce" />}
                  {isError && <XCircle className="w-5 h-5 text-rose-600 animate-pulse" />}
                  {isWarning && <AlertTriangle className="w-5 h-5 text-amber-600 animate-pulse" />}
                  {isInfo && <Info className="w-5 h-5 text-slate-600" />}
                </div>

                {/* Content Column */}
                <div className="flex-1 min-w-0">
                  {notif.title && (
                    <h4 className="text-[13px] font-bold tracking-tight mb-0.5 leading-snug">
                      {notif.title}
                    </h4>
                  )}
                  <p className="text-xs leading-relaxed opacity-95 break-words">
                    {notif.message}
                  </p>
                </div>

                {/* Manual Close Action */}
                <button
                  onClick={() => removeNotification(notif.id)}
                  className={`shrink-0 p-1 rounded-lg transition-colors ${
                    isSuccess
                      ? 'hover:bg-emerald-100 text-emerald-600'
                      : isError
                      ? 'hover:bg-rose-100 text-rose-600'
                      : isWarning
                      ? 'hover:bg-amber-100 text-amber-600'
                      : 'hover:bg-slate-200 text-slate-500'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
