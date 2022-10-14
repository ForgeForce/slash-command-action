export interface CommandDetails {
  name: string;
  arguments?: string;
}

export class Command {
  private prefix: string;

  constructor(private readonly name: string, readonly prefixIn: string) {
    this.prefix = prefixIn.replace("<ws>", " ");
    console.log("Looking for commands starting with: `" + this.prefix + "`");
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
