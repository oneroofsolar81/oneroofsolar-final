import { useEffect, useState, useRef } from 'react';

interface DebouncedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string | number;
  onChange: (value: any) => void;
  debounceMs?: number;
}

export function DebouncedInput({
  value,
  onChange,
  debounceMs = 300,
  type = 'text',
  className = '',
  ...props
}: DebouncedInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const isFocusedRef = useRef(false);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Sync with parent value ONLY when not focused
  useEffect(() => {
    if (!isFocusedRef.current) {
      setLocalValue(value);
    }
  }, [value]);

  // Debounced push to parent
  useEffect(() => {
    if (!isFocusedRef.current) return;
    if (localValue === value) return;
    
    const handler = setTimeout(() => {
      const processed = type === 'number' ? Number(localValue) : localValue;
      onChangeRef.current(processed);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [localValue, value, type, debounceMs]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    isFocusedRef.current = false;
    const rawVal = e.target.value;
    const processed = type === 'number' ? Number(rawVal) : rawVal;
    if (processed !== value) {
      onChangeRef.current(processed);
    }
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    isFocusedRef.current = true;
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return (
    <input
      type={type}
      value={localValue ?? ''}
      onChange={(e) => setLocalValue(e.target.value)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      className={className}
      {...props}
    />
  );
}

interface DebouncedTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

export function DebouncedTextarea({
  value,
  onChange,
  debounceMs = 300,
  className = '',
  ...props
}: DebouncedTextareaProps) {
  const [localValue, setLocalValue] = useState(value);
  const isFocusedRef = useRef(false);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Sync with parent value ONLY when not focused
  useEffect(() => {
    if (!isFocusedRef.current) {
      setLocalValue(value);
    }
  }, [value]);

  // Debounced push to parent
  useEffect(() => {
    if (!isFocusedRef.current) return;
    if (localValue === value) return;

    const handler = setTimeout(() => {
      onChangeRef.current(localValue);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [localValue, value, debounceMs]);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    isFocusedRef.current = false;
    const rawVal = e.target.value;
    if (rawVal !== value) {
      onChangeRef.current(rawVal);
    }
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    isFocusedRef.current = true;
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return (
    <textarea
      value={localValue ?? ''}
      onChange={(e) => setLocalValue(e.target.value)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      className={className}
      {...props}
    />
  );
}
