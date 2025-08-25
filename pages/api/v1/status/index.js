function status(request, response) {
  response.status(200).json({ chave: "ESSE É MEU PRIMEIRO TESTE DE API" });
}
export default status;
