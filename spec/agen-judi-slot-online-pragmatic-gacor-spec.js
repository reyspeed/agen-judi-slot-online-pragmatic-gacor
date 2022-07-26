'use babel';

import Agenjudislotonline-pragmaticgacor from '../lib/agen-judi-slot-online-pragmatic-gacor';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Agenjudislotonline pragmaticgacor', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('agen-judi-slot-online-pragmatic-gacor');
  });

  describe('when the agen-judi-slot-online-pragmatic-gacor:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been create
      expect(workspaceElement.querySelector('.agen-judi-slot-online-pragmatic-gacor')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'agen-judi-slot-online-pragmatic-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.agen-judi-slot-online-pragmatic-gacor')).toExist();

        let AgenjudislotonlinepragmaticgacorElement = workspaceElement.querySelector('.agen-judi-slot-online-pragmatic-gacor');
        expect(AgenjudislotonlinepragmaticgacorElement).toExist();

        let AgenjudislotonlinepragmaticgacorPanel = atom.workspace.panelForItem(AgenjudislotonlinepragmaticgacorElement);
        expect(AgenjudislotonlinepragmaticgacorPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'agen-judi-slot-online-pragmatic-gacor:toggle');
        expect(AgenjudislotonlinepragmaticgacorPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.agen-judi-slot-online-pragmatic-gacor')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'agen-judi-slot-online-pragmatic-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let AgenjudislotonlinepragmaticgacorElement = workspaceElement.querySelector('.agen-judi-slot-online-pragmatic-gacor');
        expect(AgenjudislotonlinepragmaticgacorElementa).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'agen-judi-slot-online-pragmatic-gacor:toggle');
        expect(AgenjudislotonlinepragmaticgacorElement).not.toBeVisible();
      });
    });
  });
});
