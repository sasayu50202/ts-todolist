'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setFilter } from '@/lib/store/todoSlice';

export function TodoFilter() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.todos.filter);

  return (
    <div className="flex justify-center gap-3">
      {['all', 'active', 'completed'].map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter as 'all' | 'active' | 'completed'))}
          className={`px-6 py-3 rounded-2xl font-medium transition-all ${
            currentFilter === filter
              ? 'glass-effect text-white border border-white/20'
              : 'text-zinc-500 hover:text-white'
          }`}
        >
          {filter === 'all' && 'すべて'}
          {filter === 'active' && '未完了'}
          {filter === 'completed' && '完了済み'}
        </button>
      ))}
    </div>
  );
}