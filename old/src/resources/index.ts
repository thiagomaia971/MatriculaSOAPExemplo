import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./components/aluno/aluno.component"),
    PLATFORM.moduleName("./components/disciplina/disciplina.component"),
    PLATFORM.moduleName("./components/aluno-disciplina/aluno-disciplina.component"),
  ]);
}
