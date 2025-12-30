// 🔑 COLE AQUI SEUS DADOS DO SUPABASE
const SUPABASE_URL = "https://SEU_PROJETO.supabase.co";
const SUPABASE_KEY = "SUA_PUBLIC_ANON_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const erroDiv = document.getElementById("erro");

// LOGIN
async function login() {
  erroDiv.textContent = "";

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: senha
  });

  if (error) {
    erroDiv.textContent = error.message;
    return;
  }

  // Login ok → vai para o sistema
  window.location.href = "app.html";
}

// REGISTRO
async function registrar() {
  erroDiv.textContent = "";

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha
  });

  if (error) {
    erroDiv.textContent = error.message;
    return;
  }

  alert("Conta criada! Faça login.");
}
