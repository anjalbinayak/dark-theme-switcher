export interface GeneratorInitOptions {
  glow: boolean;
}

export interface GeneratorOptions extends GeneratorInitOptions {
  id?: string;
  class?: string;
}