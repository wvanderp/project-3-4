<?php
	function checkBankrekening($br){
		if (preg_match("%\d+$%mg", $br)){
			return true;
		}else{
			return false;
		}
	}
?>
