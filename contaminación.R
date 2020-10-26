data=emisiones_de_co2
X=sort(data$Región)
library(dplyr)
reg_rubro <- function(reg, ru){
  grupo = filter(data, region== reg, rubro==ru)$tons
  return(grupo)
}

####xv
sum_comb_aric=sum(reg_rubro('Arica y Parinacota','Combustibles'))

sum_agricu_aric=sum(reg_rubro('Arica y Parinacota','Industria agropecuaria y silvicultura'))
sum_pesc_aric=sum(reg_rubro('Arica y Parinacota','Pesca'))
sum_ali_aric=sum(reg_rubro('Arica y Parinacota','Producción de alimentos'))

champ_aric=sum_ali_aric+sum_pesc_aric+sum_agricu_aric
gen_aric=sum(reg_rubro('Arica y Parinacota','Generación de energía'))

####i

sum_pesc_tara=sum(reg_rubro('Tarapacá','Pesca'))

sum_mine_tara=sum(reg_rubro('Tarapacá','Extracción de minerales'))

champ_tara=sum(sum_mine_tara)
gen_tara=sum(reg_rubro('Tarapacá','Generación de energía'))

####ii
sum_mine_anto=sum(reg_rubro('Antofagasta','Extracción de minerales'))
sum_met_anto=sum(reg_rubro('Antofagasta','Producción de metal'))

sum_todo_mine_anto=sum_mine_anto+sum_met_anto

sum_gen_anto=sum(reg_rubro('Antofagasta','Generación de energía'))

sum_pesc_anto=sum(reg_rubro('Antofagasta','Pesca'))

champ_anto=sum(sum_gen_anto)


####iii
sum_gen_ata=sum(reg_rubro('Atacama','Generación de energía'))

sum_min_ata=sum(reg_rubro('Atacama','Extracción de minerales'))
sum_met_ata=sum(reg_rubro('Atacama','Producción de metal'))
sum_todo_mine_ata=sum_met_ata+sum_min_ata

champ_ata=sum_gen_ata

####iv
sum_mine_coq=sum(reg_rubro('Coquimbo','Extracción de minerales'))

sum_gen_coq=sum(reg_rubro('Coquimbo','Generación de energía'))

sum_comer_coq=sum(reg_rubro('Coquimbo','Comercio'))

champ_coq=sum_mine_coq

####v
sum_comer_valpo=sum(reg_rubro('Valparaíso','Comercio'))

sum_mine_valpo=sum(reg_rubro('Valparaíso','Extracción de minerales'))
sum_met_valpo=sum(reg_rubro('Valparaíso','Producción de metal'))
sum_todo_mine_valpo=sum_met_valpo+sum_mine_valpo

sum_gen_valpo=sum(reg_rubro('Valparaíso','Generación de energía'))

sum_indman_valpo=sum(reg_rubro('Valparaíso','Industria manufacturera'))

sum_trans_valpo=sum(reg_rubro('Valparaíso','Transporte'))

champ_valpo=sum_gen_valpo

####met
sum_comer_met=sum(reg_rubro('Metropolitana','Comercio'))

sum_mine_met=sum(reg_rubro('Metropolitana','Extracción de minerales'))
sum_met_met=sum(reg_rubro('Metropolitana','Producción de metal'))
sum_todo_mine_met=sum_met_met+sum_mine_met

sum_gen_met=sum(reg_rubro('Metropolitana','Generación de energía'))

sum_agri_met=sum(reg_rubro('Metropolitana','Industria agropecuaria y silvicultura'))
sum_ali_met=sum(reg_rubro('Metropolitana','Producción de alimentos'))
sum_indagri_met=sum_agri_met+sum_ali_met

sum_papel_met=sum(reg_rubro('Metropolitana','Industria del papel y celulosa'))

sum_indman_met=sum(reg_rubro('Metropolitana','Industria manufacturera'))

sum_null_met=sum(reg_rubro('Metropolitana','null'))

champ_met=sum_todo_mine_met

####vi
sum_comer_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Comercio'))

sum_mine_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Extracción de minerales'))               
sum_met_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Producción de metal'))                 
sum_todo_mine_oh=sum_mine_oh+sum_met_oh                 

sum_gen_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Generación de energía'))

sum_agri_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Industria agropecuaria y silvicultura'))                 
sum_ali_oh=sum(reg_rubro("Libertador Gral. Bernardo O'Higgins",'Producción de alimentos')) 
sum_indagri_oh=sum_agri_oh+sum_ali_oh                 

champ_oh=sum_gen_oh                 

#vii
sum_gen_mau=sum(reg_rubro("Maule",'Generación de energía')) 

sum_agri_mau=sum(reg_rubro("Maule",'Industria agropecuaria y silvicultura'))                      
sum_ali_mau=sum(reg_rubro("Maule",'Producción de alimentos'))
sum_indagri_mau=sum_agri_mau+sum_ali_mau

sum_papel_mau=sum(reg_rubro("Maule",'Industria del papel y celulosa'))

sum_indman_mau=sum(reg_rubro("Maule",'Industria manufacturera'))

champ_mau=sum_papel_mau


####viii
sum_comb_bio=sum(reg_rubro("Biobío",'Combustibles'))

sum_met_bio=sum(reg_rubro("Biobío",'Producción de metal'))

sum_gen_bio=sum(reg_rubro("Biobío",'Generación de energía'))

sum_agri_bio=sum(reg_rubro("Biobío",'Industria agropecuaria y silvicultura'))
sum_ali_bio=sum(reg_rubro("Biobío",'Producción de alimentos'))
sum_indagri_bio=sum_agri_bio+sum_ali_bio

sum_pesc_bio=sum(reg_rubro("Biobío",'Pesca'))

sum_papel_bio=sum(reg_rubro("Biobío",'Industria del papel y celulosa'))

sum_indman_bio=sum(reg_rubro("Biobío",'Industria manufacturera'))

champ_bio=sum_papel_bio

####ix
sum_comer_arau=sum(reg_rubro("Araucanía",'Comercio'))

sum_agri_arau=sum(reg_rubro("Araucanía",'Industria agropecuaria y silvicultura'))
sum_ali_arau=sum(reg_rubro("Araucanía",'Producción de alimentos'))
sum_indagri_arau=sum_agri_arau+sum_ali_arau

sum_papel_arau=sum(reg_rubro("Araucanía",'Industria del papel y celulosa'))

champ_arau=sum_papel_arau

####xiv
sum_comer_rio=sum(reg_rubro("Los Ríos",'Comercio'))

sum_agri_rio=sum(reg_rubro("Los Ríos",'Industria agropecuaria y silvicultura'))
sum_ali_rio=sum(reg_rubro("Los Ríos",'Producción de alimentos'))
sum_indagri_rio=sum_agri_rio+sum_ali_rio

sum_papel_rio=sum(reg_rubro("Los Ríos",'Industria del papel y celulosa'))

champ_rio=sum_papel_rio


####x
sum_comer_lag=sum(reg_rubro("Los Lagos",'Comercio'))

sum_gen_lag=sum(reg_rubro("Los Lagos",'Generación de energía'))

sum_agri_lag=sum(reg_rubro("Los Lagos",'Industria agropecuaria y silvicultura'))
sum_ali_lag=sum(reg_rubro("Los Lagos",'Producción de alimentos'))
sum_indagri_lag=sum_agri_lag+sum_ali_lag

sum_indman_lag=sum(reg_rubro("Los Lagos",'Industria manufacturera'))

sum_pesc_lag=sum(reg_rubro("Los Lagos",'Pesca'))

champ_lag=sum_pesc_lag


####xi
sum_gen_ays=sum(reg_rubro("Aysén del Gral. Carlos Ibáñez del Campo",'Generación de energía'))

sum_pesc_ays=sum(reg_rubro("Aysén del Gral. Carlos Ibáñez del Campo",'Pesca'))

champ_ays=sum_pesc_ays


####xii
sum_comb_mag=sum(reg_rubro("Magallanes y de la Antártica Chilena",'Combustibles'))

sum_gen_mag=sum(reg_rubro("Magallanes y de la Antártica Chilena",'Generación de energía'))

sum_pesc_mag=sum(reg_rubro("Magallanes y de la Antártica Chilena",'Pesca'))

champ_mag=sum_gen_mag





















