import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [, setAuthUser] = useAuth();
  
  const handleLogout = () => {
    setAuthUser({ user: null });
    localStorage.removeItem("Users");
    toast.success("Logout successful");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <button
      className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
