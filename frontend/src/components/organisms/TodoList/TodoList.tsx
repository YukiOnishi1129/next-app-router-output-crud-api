"use client";

import { FC } from "react";
// import { useCallback, FC } from "react";
// import { useRouter } from "next/navigation";
import {
  faTrashAlt,
  faFile,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { NAVIGATION_PATH } from "@/constants/navigation";
import { TodoType } from "@/types/todo";
import styles from "./style.module.css";

type TodoListProps = {
  todoList: Array<TodoType>;
  handleDeleteTodo: (id: number, title: string) => void;
};

export const TodoList: FC<TodoListProps> = ({ todoList }) => {
  // const navigate = useRouter();

  // /**
  //  * 詳細ページに遷移する処理
  //  */
  // const handleMoveDetailPage = useCallback(
  //   (id: number) => navigate.push(`${NAVIGATION_PATH.DETAIL}${id}`),
  //   [navigate]
  // );

  // /**
  //  * 編集ページに遷移する処理
  //  */
  // const handleMoveEditPage = useCallback(
  //   (id: number) => navigate.push(`${NAVIGATION_PATH.EDIT}${id}`),
  //   [navigate]
  // );

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon icon={faFile} size="lg" onClick={() => {}} />
            </div>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => {}}
              />
            </div>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon icon={faTrashAlt} size="lg" onClick={() => {}} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
