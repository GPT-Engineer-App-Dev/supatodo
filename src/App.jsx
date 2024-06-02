import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lkryrewptosftkwcigwl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrcnlyZXdwdG9zZnRrd2NpZ3dsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzMzOTg0MSwiZXhwIjoyMDMyOTE1ODQxfQ._2W_lNdP732oSYXTdqEedo1rrhVHldrPZam393tj2CI';
export const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
