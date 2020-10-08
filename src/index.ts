import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for myorg/jupyter_theme_youcan
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@myorg/jupyter_theme_youcan:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@myorg/jupyter_theme_youcan/index.css';

    manager.register({
      name: 'jupyter_theme_youcan',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
