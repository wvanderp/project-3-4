function checkBankrekening(){
	if (!preg_match("%\d+$%mg", $br)){
	        die("rekeningnummer kan alleen cijfers bevatten");
	}

}
