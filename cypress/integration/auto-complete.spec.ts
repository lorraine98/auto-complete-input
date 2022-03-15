/// <reference types="cypress" />

import { ID } from "../../src/common/constant";
import { idToQuery, classToQuery } from "../../src/common/dom";
import { fetchSuggestionList } from "../../src/api/fetch-suggestion-list";

context("auto-complete", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  const findSearchInput = () => {
    return cy
      .get(idToQuery(ID.SearchBoxComp))
      .find(classToQuery("search-input"));
  };

  const searchWord = (word: string, ms?: number) => {
    return findSearchInput().type(`${word}`, { delay: ms });
  };

  const clickClearIcon = () => {
    return cy
      .get(idToQuery(ID.SearchBoxComp))
      .find(classToQuery("clear-icon"))
      .click();
  };

  const clearSessionStorage = () => {
    Cypress.session.clearAllSavedSessions();
  };

  describe("Search Input", () => {
    it("삭제 버튼을 눌렀을 때 search input value가 비워져요.", () => {
      searchWord("가");
      clickClearIcon().then(() => {
        findSearchInput().should("not.have.value");
      });
    });

    it("input에 focus가 사라지면 suggestion list가 닫혀요.", () => {
      searchWord("가")
        .blur()
        .then(() => {
          cy.get(".suggestion-list").children().should("not.exist");
        });
    });

    it("input에 검색 결과가 있다면 캐싱해요.", () => {
      clearSessionStorage();
      searchWord("가");
      cy.window().its("sessionStorage").invoke("getItem", "가").should("exist");
    });

    it("input에 검색 결과가 없다면 캐싱하지 않아요.", () => {
      clearSessionStorage();
      searchWord("!@#$");
      cy.window()
        .its("sessionStorage")
        .invoke("getItem", "!@#$")
        .should("not.exist");
    });
  });
});
