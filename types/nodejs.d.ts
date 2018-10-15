declare namespace NodeJS {
  interface Process {
    browser: boolean
  }
  /**
   * @see getPageContext.ts
   */
  interface Global {
    __INIT_MATERIAL_UI__: any
  }
}
