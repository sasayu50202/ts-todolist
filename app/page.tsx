import { TodoInput } from '@/components/todo/todo-input';
import { TodoList } from '@/components/todo/todo-list';
import { TodoFilter } from '@/components/todo/todo-filter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-3xl mx-auto p-6 pt-20">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-12 text-center">
          Todo
        </h1>
        <div className="space-y-8">
          <TodoInput />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    </div>
  );
}