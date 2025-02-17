import { TodoListTemplate } from "@/components/templates";
import { getTodoList } from "@/actions/todoApi";

export default async function TodoListPage() {
  const data = await getTodoList();
  if (!data) {
    return <div>データが取得できませんでした</div>;
  }
  return <TodoListTemplate data={data?.todos} />;
}
