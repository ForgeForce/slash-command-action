export interface CommandDetails {
  name: string;
  arguments?: string;
}

export class Command {
  private name: string;

  constructor(readonly nameIn: string, private readonly prefix: string) {
    this.name = nameIn.replace("\\s", " ");
  }

  public checkComment(comment: string = ""): CommandDetails | undefined {
    if (comment.startsWith(this.prefix)) {
      const actualComment = comment.substring(this.prefix.length)
      const split = actualComment.split(" ")
      if (split[0] === this.name) {
        return {
          name: this.name,
          arguments: split.length == 1 ? "" : split.slice(1).join(" "),
        }
      }
    }
  }
}
