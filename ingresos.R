data= esi_recortada
library(dplyr)
library("writexl")
rm(ls(..))
##funcion
reg_sex_niv <- function(reg, sex, niv){
  grupo = filter(data, region== reg, sexo== sex, nivel== niv)$d1_monto
  return(grupo)
}
######
####basica
reg= 8
niveles= c("Basico", "Media" , "Tecnico", "Universidad+")
hombres <- c()  
mujeres <- c()
total <- c()
len_h <- c()  
len_m <- c()
len_t <- c()
basica= c(0,1,2,3)
media= c(4,5,6)
tec= c(7,8)
uni= c(9,10,11,12,13,14)
etapa= list(basica,media, tec, uni)
for (nivel in etapa){
  h_b = c()
  m_b = c()
  t_b= c()
  for(niv in nivel){
    ho= reg_sex_niv(reg,1, niv)
    mu= reg_sex_niv(reg,2, niv)
    h_b <- append(h_b, ho)
    m_b <- append(m_b, mu)
    t_b <- append(t_b, ho)
    t_b <- append(t_b, mu)
  }
  media_ho= mean(h_b)
  media_mu= mean(m_b)
  media_to= mean(t_b)
  l_h= length(h_b)
  l_m= length(m_b)
  l_t= length(t_b)
  hombres <- append(hombres, media_ho)
  mujeres <- append(mujeres, media_mu)
  total <- append(total, media_to)
  len_h = append(len_h, l_h)
  len_m = append(len_m, l_m)
  len_t = append(len_t, l_t)
}
#hasta aca
hombres
mujeres
print("acaok")
H = filter(data, sexo == 1, region== reg)$d1_monto
M =filter(data, sexo == 2, region== reg)$d1_monto
to= filter(data, region== reg)$d1_monto
general = c()
general= c("general",mean(H),mean(M), mean(to),"datos" ,"de",reg)
tabla_data= data.frame(niveles , hombres, mujeres, total, len_h, len_m, len_t)
tabla_data= rbind(tabla_data, general)
camino= "C:\\Users\\marti\\OneDrive\\Escritorio\\Pensamiento_visual\\tablas_region\\tablaregion_"
camino= paste(camino, sep=  "", reg, ".xlsx")
write_xlsx(tabla_data,camino)


barplot(mujeres)
barplot(hombres)
