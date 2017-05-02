"use strict"

module.exports = {
  "rules": {
    "at-rule-empty-line-before": [ "always", {
      except: ["blockless-after-blockless"],
      ignore: ["after-comment"],
    } ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-unknown": true,
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
      ignore: ["stylelint-commands"],
    } ],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [ true, {
      ignore: ["consecutive-duplicates"],
    } ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-property-unit-whitelist": {
      "line-height": [],
    },
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": [ "numeric", {
      ignore: ["relative"],
    } ],
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 1,
    "function-name-case": [ "lower", {
      ignoreFunctions: ["/^DXImageTransform.Microsoft.*$/"],
    } ],
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "never",
    "function-whitespace-after": "always",
    "indentation": "tab",
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "max-line-length": [ 80, {
      "ignore": "non-comments",
    } ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "rule-empty-line-before": [ "always", {
      ignore: ["after-comment"],
    } ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      "^[a-z]+(-[a-z]+)*",
      {
        "message": "Selector should use lowercase and separate words with hyphens (selector-class-pattern)",
      },
    ],
    "selector-id-pattern": [
      "^[a-z]+(-[a-z]+)*",
      {
        "message": "Selector should use lowercase and separate words with hyphens (selector-id-pattern)",
      },
    ],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 0,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
  },
}
