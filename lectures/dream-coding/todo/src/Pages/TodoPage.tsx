import Todos from "../Components/Todo";

import useTheme from "../hooks/useTheme";

export default function TodoPage() {
  const { theme } = useTheme();

  return (
    <div>
      <Todos />
    </div>
  );
}
