// @flow

import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  // initial data
  msgEnd:string = '!!!'

  // lifecycle
  created() {
    this.printInConsole('Im created');
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
