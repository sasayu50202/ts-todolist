'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleTodo, deleteTodo } from '@/lib/store/todoSlice';
import { Trash2 } from 'lucide-react';

export function TodoList() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="group flex items-center justify-between p-6 glass-effect rounded-2xl border border-white/10 hover:border-white/20 transition-all"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-6 h-6 rounded-lg border-2 border-white/30 text-white focus:ring-2 focus:ring-white/30 focus:ring-offset-0 bg-transparent transition-all"
            />
            <span
              className={`text-lg transition-all ${
                todo.completed ? 'line-through text-zinc-500' : 'text-white'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="p-2 text-zinc-500 hover:text-white rounded-xl hover:glass-effect transition-all opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
      {filteredTodos.length === 0 && (
        <p className="text-center text-zinc-500 py-8">タスクがありません</p>
      )}
    </div>
  );
}