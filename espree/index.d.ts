// Type definitions for espree 3.4
// Project: https://github.com/eslint/espree
// Definitions by: Peter Burns <https://github.com/rictic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as estree from 'estree';
interface ParseOpts {
  // attach range information to each node
  range?: boolean;

  // attach line/column location information to each node
  loc?: boolean;

  // create a top-level comments array containing all comments
  comment?: boolean;

  // attach comments to the closest relevant node as leadingComments and
  // trailingComments
  attachComment?: boolean;

  // create a top-level tokens array containing all tokens
  tokens?: true;

  // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript
  // syntax you want to use.
  // You can also set to 2015 (same as 6), 2016 (same as 7), or 2017 (same as 8)
  // to use the year-based naming.
  ecmaVersion?: number;

  // specify which type of script you're parsing (script or module, default is script)
  sourceType?: 'script'|'module';

  // specify additional language features
  ecmaFeatures?: {

      // enable JSX parsing
      jsx?: boolean;

      // enable return in global scope
      globalReturn?: boolean;

      // enable implied strict mode (if ecmaVersion >= 5)
      impliedStrict?: boolean;

      // allow experimental object rest/spread
      experimentalObjectRestSpread?: boolean;
  };
}

export function parse(text: string, opts?: ParseOpts): estree.Program;

interface Token {
  type: string;
  value: string;
  start: number;
  end: number;
}

export function tokenize(text: string, opts?: ParseOpts): Token[];

export const VisitorKeys: {[kind: string]: string[]};

declare const node: estree.Node;
export const Syntax: {[type: string]: typeof node.type};

export const version: string;
