'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addTodo } from '@/lib/store/todoSlice';
import { Plus } from 'lucide-react';

export function TodoInput() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力..."
        className="flex-1 px-6 py-3 rounded-2xl glass-effect text-white placeholder:text-zinc-500 border border-white/10 focus:outline-none focus:border-white/30 transition-all"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-white/90 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
      >
        <Plus className="h-5 w-5" />
        <span>追加</span>
      </button>
    </form>
  );
}