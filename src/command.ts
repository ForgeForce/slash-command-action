export interface CommandDetails {
  name: string;
  arguments?: string;
}

export class Command {
  private matcher: RegExp = /^([\w]+)\b *(.*)?$/m;

  constructor(readonly name: string, readonly prefix: string) {
    this.matcher = new RegExp(prefix + '([\w]+)\b *(.*)?$', 'm')
  }

  public checkComment(comment: string = ""): CommandDetails | undefined {
    const command = comment.match(this.matcher);

    if (command && this.name === command[1]) {
      return {
        name: this.name,
        arguments: command[2],
      };
    }
  }
}
