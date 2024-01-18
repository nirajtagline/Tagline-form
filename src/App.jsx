import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import MyForm from "./presentation/MyForm";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="frame-wrapper">
        <div className="form-wrapper">
          <h3 className="form-heading">My Form</h3>
          <MyForm />
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
