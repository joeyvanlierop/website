import { getUrl, writePublicFile } from "@lib/utils";

const generateRobots = () => {
  const url = getUrl();

  const robots = `#                           ....                                                                                                                                
#                          ..ZZ+. .                                                                                                                             
#                          .$...D ....                    ........                                                                                              
#                          .$  ..+.         ..     .    .   77. .                                                                                               
#                          .Z  .  .D ...............  ... 7. .Z..                                                                                               
#                          .D . ... :+,$II77~::,:: . ...8.....O..                                                                                               
#                         ...=. ..... . . ....?,....?~.7...  .I..                                                                                               
#                          ..~ ...Z...Z..    ...= . ...  ?..    .                                                                                               
#                          ...Z .I+..   .... .. . .... 8I~...+...                                                                                               
#                             :,.... .  =Z..M  8 O8=   7 ...?....                                                                                               
#                           . .=., .. .  ....77I. ... .... DZ.. .                                                                                               
#                          .  Z   ....  . ..7NI$..   ... . M .                                                                                                  
#                          . . ...,~..+,... .... ....:  . .I.. .                                                                                                
#                        ....Z. .... .:+=OI. $8 . =,:,...  .. .                                                                                                 
#                        ...+... D.........,  ..,.  .. . Z..8...                                                                                                
#                       .....7...............~,..............O. .                                                                                               
#                       ......8......    .........    .     . ...                                                                                               
#                       .....$~~8... .. ....             .....N..... .                                                                                          
#                     ..... +~~=~~Z.. ..........        .......I..  ..                                                                                          
#                   ...  ..7~~~~~~~~O... ...   ,..     .......7....  .                                                                                          
#                   .. ...~~=~~~~~~=~=?7.......? ..    .....Z=:N......                                                                                          
#               ........O~~=~~~~~~~~~~=~~~II..............8~~~~~~I..........                                          .  .                                      
#             .........I~=~~~~~~~~~~~~~==~~~~=7.........D:=~~~~~===7+.........                                  ..........                                      
#             .......?~~~~~~~~~~~~~~~~~~~~~~~==~........+~~~~~~~~~~==:$.......                       ....   . ... ., ..  .....                                  
#             ......O:~~~~~~~~~~~~~~~~~~~~~~~~~=I.......==~~=~~~~~~==~~D~,....                       ........ ,+~   ,NND$......                                 
#           .......Z=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~8....===~~~~~=~~~~~~~===~N..   .. ..       .. ... ... ?7Z ....=I. .  =NDM?...  .                              
#           .. ...$=~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~~7...$~~~~~~~~~~~~~~=~=~:.NOO$,. ...    ....... I7, Z . ..?=.....7......NDNM...                               
#           .....Z=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==Z:~~~+?+?~~~~~~~~~=~~=8.........:8. .. . .7?. . ?  . .$,.... $.,.. .+. ...=MDNI..  ..                         
#        .......+~=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$~~~=~~~=~=?=~~==~=~~~+~............ .?7$Z7O.... ..$. .  ~=...MDNNI....$:.... 7DNM=......                      
#       ......$:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=$~=~~~~~~7Z=$$$$OZO8:~=I,... . .    ..   ....... :NI..$.~NNDN$..NDNNND.....Z .....NDNM .... ..                  
#       .....Z=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~~=~=~~~~~I.................78$~..  ... ...........  . =,.~MNDNNDD..MDNDDM.. . ~......IDNND:......                
#       ....:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~~~~~$........................ .:ZZ7~. . . .   .    .Z...DDNNDNM .DDNDNN......Z.8NDDNNNNNM.. .. ...           
#       ....7~~~~~~~~~~~~~~~~~~~~~~~==~=~~~~~~~~~~~=~=D~........... . ...........  .. .... .I8   . . ..M ....$DDNDDN..7NDDND+. ZNDNNDDDDDDDNNN+  ....           
#     . ....:~~~~~~~~~~~~~~~~~~~~~~~=ID~~~=~=~~=?=~~~:~.....   ... .                  ........MNO~= .:.7NN.. ..=DDDNDN~.,NDDDDDDDDDDDDNNNNDDNDNDN...  ...       
#     .....=~~~~~~~~~~~~~~~~~~~~~~~=~=7M:~=~==~=7~~==~=..     ..  ....     .          ....... .DND.,DZNDDDDN.....ONNDNDNNDNNDDDDDDDDDDNNNDDDDNDNNDD.. ..        
#       ...7=~==~~~~~~~~~~~~~~~~~~~~===~=D7Z~.M.D~~~~=?.........:OM7........................  . DNNDM=.+DNDNDM..ONNDDDDDNNDDDDDDDDDNNNDDMM?,NDNDNNNNN$...       
#     ....Z~~~~~~~~~~~~~=~~~=~~~~=~~+Z=7........I.......8~:, .  ODDNN7...,DNMM+,.?8.  ...  ..   ~NNNNNN=.INNDNNNDDDDDDDDNNDDNDNDDDNM7:$O~I$~$O7MDNNDNDDM...     
#     ....:~~~~~~~~~~~~$~~~~~~$77=.......Z........=...NNM.$ .....+DDDNN?...+DDDDDN. $ ...  .. .,..INDNDNNNNDDDDNNNDDDDDDNNDDNMZ~IO~+Z+?O~?Z=IO:?$INNNDNNDDI ....
#   .....7=~~~~~~~~~~=~~87+...... I .   ..,+..,$M=..:.DNNNN.? . . .7DNNNN?...ONNDNNN.~,...,.8DNNDDDDDNDDDDDDDDDDDDNNDDDDDD:8=~O?+O~=O++O~=O++O:=O=?8NDDDDNDD,. .
#  ... ..I~~=~~~~=O7: .....I ...  .. ...,...I DNNDN...NDNNNNZ.:.  ...ONDDDN?...NNDDNDN..+OMNNNDDNNDDDNDDDDDDDDDDNNNNNDDDDNDDM.O?=Z=:O?=Z=:O?=O=:8MNDNDDDDNNN=...
#   ....=~~7I$......$........O...... I?NND$...8DNDDNN...NNDNND+. .  ...NDDNNN?...NDDNNDNNDNNNNDNDONDNNDDDDDDDDNNDDNNDNDDDDDDNDDM:Z?:OI~Z+,OMNNNDNDNNDDDDDNND7. .
#    ..$=.....,........I.......:=...  .=NDDDN=...MNDDNNZ .:DDNNND,~ .... .MNNDDNDDNDDDDNDDNMO:?MNNNNNNNDDDDDDDDNNNNNN~DDDDDDDDNNDDDO:$MNDNNNNNNDNDDDDDDDDDDDDO  .
# ....$M. ...   $.. . ... .MNDZ..$.......ONDDND....NDNNND=. +DDNDDN.I. ~ZMNDNDNDNDNDNMD:.$NNDNNNDNNMDODNDDDDD$8~?ZDNNNDNDDDDDDDDDNDDNDNDDDDDDDDDDDDDDDDDDNDDD8 ..
#  ZDDNND+... . .Z.NM, .. $NNDDM,..$.... ..MNNNDN  .,DNDNND...7NDDNDDNNNNDNDNNDMN~.,$MNNNNNNNNDDDNN,.+DNDDDND::.ZMDDDDDNDDDDDDDDDNNNDDNDDDDDDDDDDDDDDDDNMDDDNN . 
#..INDDNDDN.......7NNNM ....MNNDND...:.   ...NNDNDM ..IDNNDDNMNDNDDNDNNDNNM+..IMNDNNNNNDNM7...ZNDNNDDNNNNDNNDNDNDNDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDNMO+7NNNNNDDM  .
#  .?NDDNNDDM.......NDNDNZ.. .MDDNNN...Z. .....8NNNNM~ .$NNDNDNDDDNNDNM8~.~$MNNDDNNDNDMO....  $MNDNNMDDNNNDDNDDDDDDDDDDDDDDDDDDDDDDDDDDDNNNNDDNM$+ZMNDNNNDNNDND...
#..=NNDDDDNND=. ....~NDNDN=....NDDDDN...I.. ....NNNDDDDDNNNNDDDMN=.:IMNDDDDNNNMDDDN.....+MNDNDNM8.78MNNNNDDDDDDDDDDDDDDDDDDDDDDDDNDDDDNDMO?INNDNDNNDDDNN$........
# .~NNDDDDNNNNM.... ..ZDNNNM....$DNDNNI..I.:$NNDNNNDNNNNDMN+.:IMNNDNDNDNDDNDNM=DNND+DNDDNDDNNN$MNNNNNNDDDDDDDDDDDDDDDDDDDDDNNNNNNDNN7+8NNDNDNDNNNMZ,......   ..  
# .:NDDDDDDDDDNN7.. ....MDDNDN. ..MNNNDNNDDDDNNNDNDMN?,INNNDDDDNNNNNDDDDDDNNNN=MDDDDDDDDDDDDDNNNNNDDDDDDDDDDDDDDDDDDDNNNDNDDDMO+7MNNNDDNDNDM8~ . ........        
#...NNNDDDDDDDDNNN.......=NDNDN$?MNNNDDDDDDNNDNNDNNDDDNNDDDDNDDNNNNNDDDDDDNNNNN$8DNDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDMD+?MNDDDDNDDNMD+  ...   . .              
# ...MDNDNDDDDDDDND,.. . ,?DDNNDDDDDDDDDDDDDDNDDNNDNNNNNDNDDDNNNM.NNDDNNDOD8.NNMDNNDDDDDDDDDDDDDDDDDDDDDDNDNNDNDNMM?=NMDDNDDNNDMNI. .  ........                  
# ....,DNDDDDDDDDDNDNMNNDDNDNNNDDDDDDDDNNNDDDDNNNNNDNNNDNIN8NDNNNDNDD.O:NNDDDNNDNNDDDDDDDDDDDDDDDDDDDDDDDNNNM$=OMNDDDDDNNNM$:.........    .                      
#   ... NDNDDDDDDDDDDDDDDDDDNDDDDDDDDDDDDNDNM7~I$~?8DDDDDDDDDNNNNNDOMNNNNNDDDDDDDDDDDDDDDDDDDDNDDNDNDNMO+$NNDNDNNNDNMZ= .....                                    
#   .....ZNNNDDDDDDDDDDDDDDDNNNNNDDDDMM7:77=II=$I=7+~DNNNNNNNNNNNNNNDNDNDDDDDDDDDDDDDDDNNNDDDNNDMD7?DNNNNDNDNDM8?....  .  ..                                     
#      ....NDDDDDDDDDDDDDDDDNNNMM?~77~7?~7?=7+=$+?$++$=DNNDDDDDDDDDDDDDDDDDDDDDDDDDDDNDNNDNMZ=ZNNDNNNDNDND7........                                              
#      .....MNNNNDDDDDDDDDDDNNNO=?7=?7=77=II=7I=7+=7++$.NNDDDDDDDDDDDDDDDDDDDNNNNNNNDDMN7?8MNDDNNNDNN8=......  . .                                               
#      . ....8NDDDDDDDDDDDDDDNDDMI7~7+~7?=7+=$??$~=DMDDDNNDDDDDDDDDDDDDDNDDDDDNDNMO=$MNDDNDDDNNNI..........                                                      
#      ..... ..NNDDDDDDDDDDDDNDNDNM+$=+$+?$:=NMDDDNDDDNDDDDDDDDDDDDDDNNDNDNMD=INMDNDNDDDNN$....... .      .                                                      
#         ..... ZDDDNDDDDDDDDDDDDNNDN:+NMDDDDNNNNNNNDDDDDDDNDNNNNNDDDNM?=DMDDNNNDDNN8,..............                                                             
#            . ..~NDNDDDDDDDDDDDDNNDNNNDDDDDDDDDDDDDDDDDDDDDDDDNM$~OMDDNNNDNDNN: .. ..                                                                           
#              ... MDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDNDNDDDNNMO=$NNDDDNNDDNM+.............                                                                          
#              ......NNDDDDDDDDDDDDDDDDDDDNNNDDDDDDDMNI?8MDDDNNDDNMI,.. .. ....                                                                                  
#                   ..=DDDDDDDDDDDDDNDDDDDDNNNNMZ+$MNDNNDDDNM$:...........                                                                                       
#                     ..NNNNDDDDDDNNDNNDDM8+IMNDNDDNDNMO+.     . ..                                                                                              
#                   .....7DNNDDDDNNNN++DMDDNNDNDND?..........                                                                                                    
#                   .... ..MNDDDDNNNNDNDNDNN7.......      .                                                                                                      
#                      ... .ODDNDDDDNDM8? .........                                                                                                              
#                        . ..:NDND7.......  ...                                                                                                                  
#                         .............                                                                                                                          
#                         ..    . 
  
# Allow all crawlers
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${url}/sitemap.xml
`;

  writePublicFile(robots, "robots.txt");
};

generateRobots();
