// @flow

import { Component, Prop, Vue } from 'vue-property-decorator';

export default
@Component
class HelloWorld extends Vue {
  // initial data
  msgEnd: string = '!!!';

  @Prop({ type: String, required: true })
  msg: string;

  // lifecycle
  created(): void {
    this.printInConsole(`Im created: ${this.msgEnd}`);
  }

  // method
  printInConsole(msg: string): void {
    console.log(msg);
  }

  // computed
  get msg$(): string {
    return `${this.msg} ${this.msgEnd}`;
  }
}
