import github from "@actions/github";
import core from "@actions/core";

export default function api() {
  const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
  const api = github.getOctokit(GITHUB_TOKEN);

  return api;
}
