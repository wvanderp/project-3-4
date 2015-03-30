-- adding some users

INSERT INTO `SkereDB`.`Klant` (`klant_ID`, `voornaam`, `achternaam`) VALUES ('0898649', 'wouter', 'van der plas');
INSERT INTO `SkereDB`.`Klant` (`klant_ID`, `voornaam`, `achternaam`) VALUES ('0181453364', 'matthijs', 'van der plas');

--adding some rekeningen

INSERT INTO `SkereDB`.`rekening` (`rekening_nr`, `type`, `saldo`, `date`) VALUES ('1', '1', '200', '1234131');
INSERT INTO `SkereDB`.`rekening` (`rekening_nr`, `type`, `saldo`, `date`) VALUES ('2', '2', '346', '346536');

-- adding some relations

INSERT INTO `SkereDB`.`Klant_Rekening_Rel` (`klant_id`, `rekening_nr`, `relatie_ID`) VALUES ('0898649', '1', '1');
INSERT INTO `SkereDB`.`Klant_Rekening_Rel` (`klant_id`, `rekening_nr`, `relatie_ID`) VALUES ('0181453364', '2', '2');

-- adding some pasjes

INSERT INTO `SkereDB`.`pas` (`pas_id`, `datumUitgifte`, `rekening_nr`) VALUES ('1', '123213', '1');
INSERT INTO `SkereDB`.`pas` (`pas_id`, `datumUitgifte`, `rekening_nr`) VALUES ('2', '3432', '2');
