/**
 * @file Papier, A strict, simple recursive document language
 * @author Dietrich Daroch <Dietrich@Daroch.me>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "papier",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello",
  },
});
