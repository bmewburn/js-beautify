'use strict';

var isIndentDecrement = function(raw_token) {
    return raw_token.text === '<?php -1 ?>' || raw_token.text === '<?php 0 ?>';
}

var isIndentIncrement = function(raw_token) {
    return raw_token.text === '<?php 1 ?>' || raw_token.text === '<?php 0 ?>';
}

var PHP = {
    isIndentIncrement: isIndentIncrement,
    isIndentDecrement: isIndentDecrement,
}

module.exports.PHP = PHP;
