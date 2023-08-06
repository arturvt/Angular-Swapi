describe('Util Page', () => {
  beforeEach(() => cy.visit('/util'));

  it('Open Modal', () => {
    const id = 'sdx-dialog-content';

    cy.get('[data-test-selector="closable-modal-example"]').should('be.visible').click();

    cy.get('sdx-dialog-toggle').click({ force: true });

    // cy.get(`[data-test-selector="closable-modal-example"] sdx-dialog.hydrated`).then((queryResult) => {
    //   expect(queryResult).to.have.length(1);
    //   const sdxDialogElement = queryResult.get(0) as HTMLElement & { close: () => {} };
    //   expect(sdxDialogElement).to.not.be.undefined;
    //   expect(sdxDialogElement.close).to.not.be.undefined;
    //   sdxDialogElement.close();
    // });
  });
});
