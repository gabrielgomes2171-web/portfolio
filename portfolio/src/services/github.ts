export async function getGithubUser() {
  const response = await fetch(
    "https://api.github.com/users/gabrielgomes2171-web"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do GitHub");
  }

  return response.json();
}

export async function getRepositories() {
  const response = await fetch(
    "https://api.github.com/users/gabrielgomes2171-web/repos?sort=updated"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  return response.json();
}