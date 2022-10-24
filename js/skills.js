data = {
    "attPerception": {
        "name_key": "attPerceptionName",
        "name": "Atributo: Percepción",
        "icon": "ui_game_symbol_stealth",
        "description": "La percepción es la medida de tu conciencia sensorial. El aumento de la percepción aumenta el bono de tiro a la cabeza y la posibilidad de desmembramiento con lanzas, rifles, armas explosivas y herramientas.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Ignorante",
                "long_description": "Eres bastante inconsciente en cuanto a percepción. Inflige un 200 % de daño por tiro a la cabeza y tienes un 5 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "2": {
                "short_description": "Desconocido",
                "long_description": "Aún no eres consciente de la mayoría de las cosas que te rodean. Inflige un 210 % de daño por tiro a la cabeza y tienes un 10 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "3": {
                "short_description": "Inobservante",
                "long_description": "A veces eres inobservante, pero estás mejorando. Inflige un 220 % de daño por tiro a la cabeza y tienes un 15 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "4": {
                "short_description": "Inconsciente",
                "long_description": "Tu percepción inconsciente suele ser solo un pequeño contratiempo. Inflige un 230 % de daño por tiro a la cabeza y tienes un 20 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "5": {
                "short_description": "Observador",
                "long_description": "Eres observador y te das cuenta de lo suficiente para marcar una gran diferencia. Inflige un 240 % de daño por tiro a la cabeza y tienes un 25 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "6": {
                "short_description": "Atento",
                "long_description": "Tu atención a los detalles te está ayudando claramente en el combate. Inflige un 250 % de daño por tiro a la cabeza y tienes un 30 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "7": {
                "short_description": "Discernimiento",
                "long_description": "Ahora puedes discernir los puntos débiles de los enemigos con facilidad. Inflige un 260 % de daño por tiro a la cabeza y tienes un 35 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "8": {
                "short_description": "Perceptivo",
                "long_description": "Tu percepción es asombrosa. Inflige un 270 % de daño por tiro a la cabeza y tienes un 40 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "9": {
                "short_description": "Conciencia Astuta",
                "long_description": "Tu conciencia es astuta. Inflige un 285 % de daño por tiro a la cabeza y tienes un 45 % de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 3
            },
            "10": {
                "short_description": "Tiro en la cabeza explosivo",
                "long_description": "Si se trata de hacer explotar cabezas, no tienes rival. Inflige un 300 % de daño por tiro a la cabeza y tienes un 50% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 3
            }
        },
        "skills": {
            "skillPerceptionCombat": {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": {
                    "perkDeadEye": {
                        "name_key": "perkDeadEyeName",
                        "parent": "skillPerceptionCombat",
                        "name": "Ojo muerto",
                        "icon": "ui_game_symbol_map_cursor",
                        "description": "Especialízate en apuntar con los rifles y destrozar a tu objetivo con una bala manejada por expertos. Un disparo, una muerte.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepción 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepción 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tiro a la olla",
                                "long_description": "Tiro a la olla. Puedes golpear el lado ancho de un granero y hacer un 10 % más de daño con rifles. Crea 2 rifles de calidad deficiente, apunta y recarga un 10 % más rápido. Desbloquea la fabricación de rifles de caza.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Fusilero",
                                "long_description": "Eres un fusilero y puedes alcanzar una roca grande a 30 yardas. Crea rifles de caza de calidad 3 justa. Inflige un 20 % más de daño, apunta un 20 % más rápido, recarga un 15 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Tirador",
                                "long_description": "Ahora eres un tirador y sabes resistir. Crea rifles de calidad 4 buena. Inflige un 30 % más de daño, apunta un 32 % más rápido, recarga un 20 % más rápido y utiliza un 10% menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificación por daño un 10 %, 20 % hasta un máximo de 30 %.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Francotirador",
                                "long_description": "Ahora eres un francotirador. Crea 5 rifles de calidad 5 genial. Inflige un 40 % más de daño, apunta un 45 % más rápido, recarga un 25 % más rápido y utiliza un 20 % menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificación por daño un 20 %, 30 % hasta un máximo de 40 %.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ojo muerto",
                                "long_description": "Ojo Muerto: A través de todo el duro entrenamiento y los innumerables disparos, ahora eres un francotirador a ojo muerto. Inflige un 50 % más de daño, apunta un 60 % más rápido, recarga un 30 % más rápido y utiliza un 30 % menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificación por daños en un 30 %, 40 % hasta un máximo de 50 %.",
                                "cost": 1
                            }
                        }
                    },
                    "perkDemolitionsExpert": {
                        "name_key": "perkDemolitionsExpertName",
                        "parent": "skillPerceptionCombat",
                        "name": "Experto en demoliciones",
                        "icon": "ui_game_symbol_explosion",
                        "description": "Especialízate en armas explosivas para aturdir, lisiar y desmembrar a tus enemigos.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepción 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepción 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Granadero iniciado",
                                "long_description": "Ahora eres un iniciado granadero, ten cuidado con esos explosivos. Aumenta el daño en un 10 %, la velocidad de recarga en un 15 %, apunta un 10 % más rápido, obtienes 50 % más de posibilidades de aturdir a los enemigos y 5 % más de posibilidades de desmembrar.\\nFabrica bombas de tubo, minas de placa de presión y minas de ollas de cocina.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "\"I'm TNT, I'm dynamite.\" ",
                                "long_description": "Aumenta el daño en un 20 %, la velocidad de recarga en un 20 %, apunta un 20 % más rápido, obtienes 100 % más de posibilidades de aturdir a los enemigos y 10 % más de posibilidades de desmembrar.\\nFabrica dinamita y mina terrestre hecha con tapacubos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Manipulador de explosivos",
                                "long_description": "Ahora eres un manipulador de explosivos. Aumenta el daño en un 30 %, la velocidad de recarga en un 25 %, apunta un 30 % más rápido, obtienes 33 % más de posibilidades de paralizar a los enemigos y 20 % más de posibilidades de desmembrar.\\nFabrica granadas y pilas más eficientes de pólvora.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Hombre cohete",
                                "long_description": "Ahora eres un hombre cohete. Aumenta el daño en un 40 %, la velocidad de recarga en un 30 %, apunta un 40 % más rápido, obtienes 66 % más de posibilidades de paralizar a los enemigos y 30 % más de posibilidades de desmembrar.\\nFabrica cohetes altamente explosivos y cohetes antipersonales de fragmentación.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Experto en demoliciones",
                                "long_description": "Experto en demoliciones. Haces que las cosas exploten a lo grande. Aumenta el daño en un 50 %, la velocidad de recarga en un 35 %, apunta un 50 % más rápido, y obtienes un 45 % más de posibilidades de desmembrar.\\nFabrica cargas temporizadas, granadas de contacto y minas terrestres hechas con filtros de aire.",
                                "cost": 1
                            }
                        }
                    },
                    "perkJavelinMaster": {
                        "name_key": "perkJavelinMasterName",
                        "parent": "skillPerceptionCombat",
                        "name": "Maestro de la jabalina",
                        "icon": "ui_game_symbol_spear",
                        "description": "Aprende a infligir más daño y a lanzar lanzas más lejos y con más precisión.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepción 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepción 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Palos afilados",
                                "long_description": "Los palos y las piedras no pueden romperme los huesos, pero si se combinan forman una bonita lanza. Crea lanzas de calidad 2 deficiente. Las lanzas causan un 10 % más de daño y tienen un 10 % más de alcance cuando son lanzadas.\\nDesbloquea la fabricación de lanzas de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Lanzador de lanzas",
                                "long_description": "Crea lanzas de calidad 3 justa. Las lanzas ahora infligen un 20 % más de daño y tienen un 20% más de alcance cuando son lanzadas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Lancero",
                                "long_description": "Ahora eres un Lancero y puedes hacer lanzas de calidad 4 buenas. Las lanzas infligen un 30 % más de daño y tienen un 30 % más de alcance cuando son lanzadas.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Lanzador",
                                "long_description": "Ahora eres un lanzador y puedes crear lanzas de calidad 5 genial. Las lanzas infligen ahora un 40 % más de daño y tienen un 40 % más de alcance.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Maestro de la jabalina",
                                "long_description": "Ahora eres un maestro de jabalina y, si esto no fuera el apocalipsis, podrías estar en los Juegos Olímpicos. Las lanzas causan un 50 % más de daño y tienen un 50 % más de alcance.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillPerceptionGeneral": {
                "name_key": "skillPerceptionGeneralName",
                "name": "Beneficios de percepción general",
                "icon": "ui_game_symbol_stealth",
                "perks": {
                    "perkLockPicking": {
                        "name_key": "perkLockPickingName",
                        "parent": "skillPerceptionGeneral",
                        "name": "Apertura de cerraduras",
                        "icon": "ui_game_symbol_unlock",
                        "description": "Aprende a forzar las ganzúas más rápido y a romper menos ganzúas.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Saqueador",
                                "long_description": "Saqueador. Estás empezando a hacerte un nombre. Puedes forzar cerraduras un 20 % más rápido y tener un 10 % menos de posibilidades de romper las ganzúas. Fabrica ganzúas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cerrajero",
                                "long_description": "Ahora eres un herrero de cerraduras y pocas cerraduras te mantendrán fuera. Puedes forzar cerraduras un 40 % más rápido y tener un 20 % menos de posibilidades de romper las ganzúas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Quebrantador de cajas de seguridad",
                                "long_description": "Ahora eres un quebrantador de cajas de seguridad de clase mundial. Puedes forzar cerraduras un 60 % más rápido y tener un 30 % menos de posibilidades de romper las ganzúas.",
                                "cost": 1
                            }
                        }
                    },
                    "perkInfiltrator": {
                        "name_key": "perkInfiltratorName",
                        "parent": "skillPerceptionGeneral",
                        "name": "El infiltrador",
                        "icon": "ui_game_symbol_stealth",
                        "description": "Usa tus sentidos aumentados para recibir menos daño por las trampas.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Topo",
                                "long_description": "Ahora eres un topo y puedes moverte por trampas peligrosas más fácilmente. Las trampas de tablas sueltas y las minas terrestres se activan medio segundo más despacio. Recibe un 20 % menos de daño de las minas terrestres.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Intruso",
                                "long_description": "Ahora eres un intruso y te mueves con confianza a través de lugares peligrosos. Las trampas de tablas sueltas y las minas terrestres se activan 1 segundo más despacio. Recibe un 35 % menos de daño de las minas terrestres.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "El infiltrador",
                                "long_description": "Eres conocido como El Infiltrador, ya que puedes infiltrarte con seguridad por los campos minados más peligrosos. Las trampas de tablas sueltas y las minas terrestres se activan 2 segundos más despacio. Recibe un 50 % menos de daño de las minas terrestres. Puedes recoger minas terrestres.",
                                "cost": 1
                            }
                        }
                    },
                    "perkAnimalTracker": {
                        "name_key": "perkAnimalTrackerName",
                        "parent": "skillPerceptionGeneral",
                        "name": "Rastreador de animales",
                        "icon": "ui_game_symbol_animal_tracker",
                        "description": "Aprende a detectar y rastrear animales a menos de 100 metros y nunca pases hambre.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Rastreador de senderos",
                                "long_description": "Agáchate y usa tu aguda vista para encontrar las huellas de pequeños animales como conejos, serpientes o gallinas.\\nLos animales rastreados están marcados en tu brújula y mapa.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cazador",
                                "long_description": "Tus sentidos comparables a los del halcón pueden detectar depredadores sigilosos como lobos o coyotes.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Sabueso de caza mayor",
                                "long_description": "Conviértete en el mejor rastreador. Tus sentidos son incomparables. Puedes detectar depredadores como osos o pumas.",
                                "cost": 1
                            }
                        }
                    },
                    "perkPenetrator": {
                        "name_key": "perkPenetratorName",
                        "parent": "skillPerceptionGeneral",
                        "name": "El penetrador",
                        "icon": "ui_game_symbol_paint_copy_block",
                        "description": "Encuentras puntos débiles en la armadura de un objetivo y puedes usar balas de rifle AP para disparar a través de múltiples objetivos orgánicos.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepción 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel de percepción 8",
                                "required_level": 8
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tiro perforador",
                                "long_description": "Ignora el 10 % de la armadura con armas de fuego y arcos o el 20 % con cualquier objeto de reducción de armadura del objetivo.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Perforador",
                                "long_description": "Ignora el 15 % de la armadura con armas de fuego y arcos o el 30 % con cualquier objeto de reducción de armadura del objetivo.\\nLas balas perforadoras pueden atravesar un objetivo adicional o un bloque de hasta 500 puntos de impacto cuando se usan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Agujereador",
                                "long_description": "Ignora el 20 % de la armadura con armas de fuego y arcos o el 40 % con cualquier objeto de reducción de armadura del objetivo.\\nLas balas perforadoras pueden atravesar dos objetivos adicionales o un bloque de hasta 750 puntos de impacto cuando se usan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "El penetrador",
                                "long_description": "Ignora el 20 % de la armadura con armas de fuego y arcos o el 50 % con cualquier objeto de reducción de armadura del objetivo.\\nLas balas perforadoras de armadura pueden atravesar tres objetivos adicionales o un bloque de hasta 1000 puntos de impacto cuando se utilizan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillPerceptionScavenging": {
                "name_key": "skillPerceptionScavengingName",
                "name": "Beneficios de carroñar",
                "icon": "ui_game_symbol_hand",
                "perks": {
                    "perkLuckyLooter": {
                        "name_key": "perkLuckyLooterName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Saqueador con suerte",
                        "icon": "ui_game_symbol_shopping_cart",
                        "description": "Especialízate en la búsqueda de la veta madre y tal vez obtendrás un poco más por tus molestias.\\nEncontrarás un botín mejor con cada nivel de beneficio.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de percepción 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de percepción 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Pocas posibilidades",
                                "long_description": "Tienes una pequeña oportunidad de encontrar un botín mejor. Suma 5% a la bonificación de botín para los contenedores que abras personalmente. El saqueo es un 10 % más rápido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Afortunado",
                                "long_description": "Tu suerte está mejorando y mires donde mires siempre encuentras algo bueno. Suma 10% a la bonificación por botín. El saqueo es un 20 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Buena fortuna",
                                "long_description": "Suma 15% a la bonificación por botín. El saqueo es un 40 % más rápido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Bendecido",
                                "long_description": "Parece que has sido bendecido con encontrar un gran botín por dondequiera que mires. Suma 20% a la bonificación por botín. El saqueo es un 60 % más rápido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Saqueador con suerte",
                                "long_description": "El saqueador con suerte. Estás en una racha y los dados están cargados. Suma 25% a la bonificación por botín. El saqueo es un 80 % más rápido.",
                                "cost": 1
                            }
                        }
                    },
                    "perkTreasureHunter": {
                        "name_key": "perkTreasureHunterName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Cazador de tesoro",
                        "icon": "ui_game_symbol_treasure",
                        "description": "Conviértete en uno de los mejores cazadores de tesoros de todos los tiempos aprendiendo trucos que incluso causarían la envidia de Barbanegra.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Saqueador",
                                "long_description": "Por cada 7 bloques cavados, el radio de búsqueda del tesoro se reduce 1 m. Sin el beneficio, tendrás que cavar 10 bloques.\\nEncuentra un 10 % más de objetos en el tesoro enterrado.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Merodeador",
                                "long_description": "Por cada 5 bloques cavados, el radio de búsqueda del tesoro se reduce 1 m.\\nEncuentra un 20 % más de objetos en el tesoro enterrado.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cazador de tesoro",
                                "long_description": "Por cada 3 bloques cavados, el radio de búsqueda del tesoro se reduce 1 m.\\nEncuentra un 30 % más de objetos en el tesoro enterrado.",
                                "cost": 1
                            }
                        }
                    },
                    "perkSalvageOperations": {
                        "name_key": "perkSalvageOperationsName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Operaciones de salvamento",
                        "icon": "ui_game_symbol_scrap",
                        "description": "¡No malgastes, no quieras! Recicla artículos con llave inglesa, trinquete o atornillador de impacto para obtener más recursos",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepción 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepción 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de percepción 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de percepción 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de percepción 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Coleccionista de chatarra",
                                "long_description": "¿Quién sabe qué cosas útiles se pueden encontrar al desarmar las cosas? Fabrica herramientas de rescate de calidad 2 pobre. Inflige un 10 % más de daño, apunta un 20 % más rápido y obtiene un 20 % más de recursos con llave inglesa, trinquete o atornillador de impacto.\\nDesbloquea fabricación de llave inglesa.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Carroñero",
                                "long_description": "La mayoría de la gente te llama carroñero, pero por lo menos es una vida honesta. Fabrica herramientas de rescate de calidad 3 justa. Inflige un 20 % más de daño, apunta un 40 % más rápido y obtiene un 40 % más recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Recuperador",
                                "long_description": "Parece que tienes un don para recuperar piezas más útiles que el carroñero promedio. Fabrica herramientas de rescate de calidad 4 buena. Inflige un 30 % más de daño, apunta un 60 % más rápido y obtiene un 60 % más recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Coleccionista de piezas",
                                "long_description": "Tu capacidad para reunir piezas recuperadas es notable. Fabrica herramientas de rescate de calidad 5 genial. Inflige un 40 % más de daño, apunta un 80 % más rápido y obtiene un 80 % más recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Maestro carroñero",
                                "long_description": "Eres el rey de los traficantes de chatarra y la envidia de los monos grasientos del Apocalipsis. Inflige un 50 % más de daño, apunta un 100 % más rápido y obtiene un 100 % más recursos con herramientas de rescate como llaves. con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            }
                        }
                    }
                }
            }
        }
    },
    "attStrength": {
        "name_key": "attStrengthName",
        "name": "Atributo: Fuerza",
        "icon": "ui_game_symbol_muscle",
        "description": "La fuerza es la medida de tu poder muscular. Aumentar la fuerza aumenta el bono de tiro a la cabeza y la posibilidad de desmembramiento con escopetas, palos, mazos y herramientas.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Debilitamiento",
                "long_description": "Todo el mundo quiere ser un culturista pero nadie quiere levantar esas pesadas pesas. Inflige un 200 % de daño por tiro a la cabeza y tienes un 5 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "2": {
                "short_description": "Descarnado",
                "long_description": "Puede que seas flaco, pero tienes un fuego dentro que te hace grande y fuerte. Inflige un 210 % de daño por tiro a la cabeza y tienes un 10 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "3": {
                "short_description": "Bebedor de leche",
                "long_description": "¿Qué hace un bebedor de leche como tú en el apocalipsis zombi? Inflige un 220 % de daño por tiro a la cabeza y tienes un 15 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "4": {
                "short_description": "Suavón",
                "long_description": "Tu llanta de repuesto puede evitar que mueras de hambre, pero no te ayuda a balancear un mazo. Inflige un 230 % de daño por tiro a la cabeza y tienes un 20 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "5": {
                "short_description": "En forma",
                "long_description": "Estás en forma y eres capaz de infligir un 240 % de daño por tiro a la cabeza y tienes un 25 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "6": {
                "short_description": "Fuerte",
                "long_description": "Eres muy fuerte y todos los normalitos del gimnasio te envidian. Inflige un 250 % de daño por tiro a la cabeza y tienes un 30 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "7": {
                "short_description": "Culturista",
                "long_description": "Las sesiones de pesas con palos y las mazas te ha dado frutos, hermano. Inflige un 260 % de daño por tiro a la cabeza y tienes un 35 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "8": {
                "short_description": "Levantador de peso",
                "long_description": "Tu enorme fuerza es legendaria. Inflige un 270 % de daño por tiro a la cabeza y tienes un 40 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "9": {
                "short_description": "Modo Bestia",
                "long_description": "El tamaño, la fuerza y la potencia están todos a nivel campeón ahora. Inflige un 285 % de daño por tiro a la cabeza y tienes un 45 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 3
            },
            "10": {
                "short_description": "Campeón olímpico",
                "long_description": "Podrías haber sido un campeón olímpico si el apocalipsis no hubiera arruinado ese sueño. Ahora simplemente aplastas zombis. Inflige un 300 % de daño por tiro a la cabeza y tienes un 50 % más de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 3
            }
        },
        "skills": {
            "skillStrengthCombat": {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": {
                    "perkBoomstick": {
                        "name_key": "perkBoomstickName",
                        "parent": "skillStrengthCombat",
                        "name": "Palo explosivo",
                        "icon": "ui_game_symbol_shotgun",
                        "description": "Especialízate en escopetas y envía a tus enemigos a conocer a su creador. Haz más daño, secciona miembros, dispara y recarga más rápido.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fuerza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Vagabundo de escopeta",
                                "long_description": "Tal vez tu puntería no sea muy buena, o simplemente te gusta hacer mucho daño de cerca y personalmente. De cualquier modo, un vagabundo con una escopeta no debe ser molestado. 2 escopetas de calidad artesanal, infligen un 10 % más de daño, un 10 % más de velocidad de disparo y la recarga es un 10 % más rápida. Aturde a los enemigos durante 6 segundos.\\nAumenta las posibilidades de desmembramiento en un 5 %.\\nDesbloquea la creación de la escopeta de doble cañón.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Nómada de escopeta",
                                "long_description": "Deambular por los páramos como un nómada ha mejorado tus habilidades con escopetas. 3 escopetas de calidad justa, infligen un 20 % más de daño, un 20 % más de velocidad de disparo y la recarga es un 15 % más rápida.\\nAumenta la probabilidad de desmembrar un 10 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Profesional de la escopeta",
                                "long_description": "Si los encuentros con escopeta siguieran estando de moda, acabarías con todos esos patos de arcilla y serías considerado un profesional de la escopeta. 4 escopetas de calidad buena, infligen un 30 % más de daño, un 30% más de velocidad de disparo y la recarga es un 20 % más rápida. Aturde a los enemigos durante 8 segundos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Maestro de la escopeta",
                                "long_description": "Ahora eres mortal con una escopeta y eres considerado un maestro de la escopeta. 5 escopetas de calidad genial, inflige un 40 % más de daño, un 40 % más de velocidad de disparo y la recarga es un 25 % más rápida.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Palo explosivo",
                                "long_description": "Has ascendido al legendario estado de Mesías Escopetero, ya que eres lo último que ven antes de conocer a su creador. Inflige un 50 % más de daño, un 50 % más de velocidad de disparo y un la recarga es un 30 % más rápida.\\nLos disparos en las piernas paralizan a los oponentes.",
                                "cost": 1
                            }
                        }
                    },
                    "perkPummelPete": {
                        "name_key": "perkPummelPeteName",
                        "parent": "skillStrengthCombat",
                        "name": "Pete apalea",
                        "icon": "ui_game_symbol_stunned",
                        "description": "Especialízate en dejar a tus enemigos sin sentido con palos y porras.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fuerza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Currela",
                                "long_description": "Puede que no sepas dar un puñetazo, pero como currela, ¡sabes atizar con un palo! Fabrica palos de calidad 2 deficiente, inflige un 10 % más de daño y los ataques infligen un 40 % más de daño a los enemigos aturdidos. Los ataques poderosos tienen un 60 % de posibilidades de derribar nuevamente a los enemigos.\\nDesbloquea la fabricación de bates de béisbol.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Matón",
                                "long_description": "Te estás haciendo un nombre como peligroso matón. Fabrica palos de calidad 3 justa, inflige un 20 % más de daño, los ataques infligen un 80 % más de daño a los enemigos aturdidos y los ataques poderosos tienen un 70 % de posibilidades de derribar nuevamente a los enemigos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Grandes Ligas",
                                "long_description": "Has luchado lo suficiente como para estar en las grandes ligas. Fabrica palos de calidad 4 buena, inflige un 30 % más de daño, los ataques infligen un 120 % más de daño a los enemigos aturdidos y los ataques poderosos tienen un 80 % de posibilidades de derribar nuevamente a los enemigos.\\nAcertar 5 impactos seguidos en poco tiempo hacen que el último golpe provoque un 100 % de daño extra.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Quédate ahí abajo",
                                "long_description": "Cuando dijiste que se quedara abajo, lo decías en serio. Fabrica palos de calidad 5 genial, inflige un 40 % más de daño, los ataques infligen un 160 % más de daño a los enemigos aturdidos y los ataques poderosos tienen un 90 % de posibilidades de derribar nuevamente a los enemigos.\\n4 golpes sucesivos en poco tiempo causan que el último golpe provoque un daño extra del 100 %.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Pete apalea",
                                "long_description": "Pete apalea una vez se enfrentó a 50 zombis con solo un palo, y estaría orgulloso de ti. Inflige un 50 % más de daño, los ataques causan un 200 % más de daño a los enemigos aturdidos y los ataques poderosos tienen un 100 % de posibilidades de derribar nuevamente a los enemigos.\\n3 golpes sucesivos en poco tiempo hacen que el último golpe provoque un daño extra del 100 %.",
                                "cost": 1
                            }
                        }
                    },
                    "perkSkullCrusher": {
                        "name_key": "perkSkullCrusherName",
                        "parent": "skillStrengthCombat",
                        "name": "Triturador de cráneo",
                        "icon": "ui_game_symbol_sledge",
                        "description": "Especialízate en destruir enemigos con armas y estructuras como mazos.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fuerza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Amoratador",
                                "long_description": "Eres un amoratador y con un poco de suerte a veces puedes derribar a los zombis geriátricos. Fabrica mazos de calidad 2 deficiente e inflige un 10 % más de daño. Tienes un 15 % de posibilidades de derribar enemigos con ataques poderosos.\\nDesbloquea la fabricación de mazos de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Demoledor",
                                "long_description": "Ya eres un demoledor, pero no te lo creas demasiado todavía. Fabrica mazos de calidad 3 justa e inflige un 20 % más de daño. Tienes un 30 % de posibilidades de derribar enemigos con ataques poderosos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Triturador",
                                "long_description": "Eres un triturador certificado de la mayoría de las cosas que se interponen en tu camino. Fabrica mazos de calidad 4 buena e inflige un 30 % más de daño. Los ataques poderosos tienen un 45 % de posibilidades de derribar enemigos y un 20 % de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Rompehuesos",
                                "long_description": "Casi has perfeccionado el arte de romper cosas y huesos. Fabrica mazos de calidad 5 genial e inflige un 40 % más de daño. Los ataques poderosos tienen un 60 % de posibilidades de derribar enemigos y un 35 % de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Triturador de cráneo",
                                "long_description": "Triturador de cráneo. Si alguien te molesta, tienes los medios para aplastarle el cráneo. Inflige un 50 % más de daño. Los ataques poderosos tienen un 75 % de posibilidades de derribar enemigos, y un 50 % de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillStrengthGeneral": {
                "name_key": "skillStrengthGeneralName",
                "name": "Beneficios generales de fuerza",
                "icon": "ui_game_symbol_muscle",
                "perks": {
                    "perkSexualTrex": {
                        "name_key": "perkSexualTrexName",
                        "parent": "skillStrengthGeneral",
                        "name": "Tiranosaurio sexual",
                        "icon": "ui_game_symbol_trex",
                        "description": "Especialízate en desencadenar un implacable asalto de golpes que garantiza dejar a tu presa boquiabierta ante tu inquebrantable resistencia.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Calentador de bancos",
                                "long_description": "Te has graduado como calentador de bancos. Reduce en un 8 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 15 % los ataques de potencia.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Atleta",
                                "long_description": "Ahora eres un atleta de buena fe y eso de no hacer nada es cosa del pasado. Reduce en un 15 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 30 % los ataques de potencia.\\nLos golpes mortales conceden 10 de resistencia.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Guerrero",
                                "long_description": "Nadie le faltará el respeto a un guerrero. Reduce en un 20 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 40 % los ataques de potencia.\\nLos golpes mortales conceden 20 de resistencia.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Gladiador de jaula",
                                "long_description": "Ahora eres un gladiador de jaula y has alcanzado la mayor destreza atlética posible. Reduce en un 25 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 50 % los ataques de potencia.\\nLos golpes mortales conceden 30 de resistencia.",
                                "cost": 1
                            }
                        }
                    },
                    "perkHeavyArmor": {
                        "name_key": "perkHeavyArmorName",
                        "parent": "skillStrengthGeneral",
                        "name": "Armadura pesadas",
                        "icon": "ui_game_symbol_armor_iron",
                        "description": "Especialízate en protegerte con hierro y acero, convirtiéndote en un gigante imparable en el campo de batalla.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Hombre de hojalata",
                                "long_description": "Puede que moverte sea un poco incómodo con una armadura pesada, pero has sobrevivido para contarlo. Crea armaduras pesadas de calidad 2 deficiente, reduce el movimiento de la armadura pesada y la penalización de resistencia en un 5 %. Mejora la durabilidad en un 50 %.\\nDesbloquea la elaboración de armadura de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Metal pesado",
                                "long_description": "¡Ciertamente sabes recibir un golpe! Crea armaduras pesadas de calidad 3 justa, reduce la penalización por movimiento de armadura pesada y la penalización de resistencia en un 10 %. Mejora la durabilidad en un 100 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Hombre de hierro",
                                "long_description": "Ahora sí que estamos hablando de una protección seria. Crea armaduras pesadas de calidad 4 buena, reduce la penalización por movimiento de armadura pesada y la penalización de resistencia en un 17 %. Mejora la durabilidad en un 150 %.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Entra en el tanque",
                                "long_description": "Ahora eres un tanque ambulante. Crea armaduras pesadas de calidad 5 genial, reduce la penalización por movimiento de armadura pesada y la penalización de resistencia en un 25 %. Mejora la durabilidad en un 200 %.",
                                "cost": 1
                            }
                        }
                    },
                    "perkPackMule": {
                        "name_key": "perkPackMuleName",
                        "parent": "skillStrengthGeneral",
                        "name": "Mula de carga",
                        "icon": "ui_game_symbol_pack_mule",
                        "description": "Eres una mula de carga y puedes llevar más artículos en tu inventario sin sufrir penalizaciones de movimiento.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de fuerza 4",
                                "required_level": 4
                            },
                            "5": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Desorganizado",
                                "long_description": "¿Quién tiene tiempo para organizar sus cosas perfectamente? Lleva tres artículos más sin desbordarte.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Señora de la bolsa",
                                "long_description": "Sabes que está en alguna parte. Lleva otros tres artículos más sin desbordarte.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Ordenado y organizado",
                                "long_description": "Sabes exactamente dónde está todo. Lleve cuatro artículos adicionales sin ser gravados.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "En forma de barco",
                                "long_description": "Acabas de pasar la inspección en privado.  Lleva cuatro artículos más sin desbordarte.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Mula de carga",
                                "long_description": "Ahora solo estás presumiendo, eres parte mula o un hombre fuerte. Lleva cuatro artículos más sin desbordarte.",
                                "cost": 1
                            }
                        }
                    },
                    "perkMasterChef": {
                        "name_key": "perkMasterChefName",
                        "parent": "skillStrengthGeneral",
                        "name": "Master Chef",
                        "icon": "ui_game_symbol_spatula",
                        "description": "Crea comidas más completas con beneficios avanzados y aprende a cocinar más rápido.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fuerza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Soltero",
                                "long_description": "Cocinar no es lo tuyo, pero ya sabes lo básico. Desbloquea recetas básicas como tocino y huevos, carnes hervidas y a la parrilla, patatas al horno, pan de maíz, té y café. Cocina un 10 % más rápido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Abuela",
                                "long_description": "Igual que como las hacía la abuela, sabrosas y abundantes comidas que te llenan durante días. Haz filetes con papas, estofado de carne y de vegetales, pastel de arándanos y varios platos de calabaza. Cocina un 20 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cocinero limitado",
                                "long_description": "Aprende a hacer comidas nutritivas a partir de productos enlatados. Sopa de pescado artesanal, estofado de vagabundos, perritos calientes con chile y tacos de pescado. Báñalas con batidos de yuca y cerveza. Cocina un 30 % más rápido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Cocinero del ejército",
                                "long_description": "Cocina para un ejército haciendo estofado de gumbo, pastel de pastores, espaguetis y salsa de atún en pan tostado. Cocina un 40 % más rápido. Usa un 20 % menos de los ingredientes principales de una receta.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Master Chef",
                                "long_description": "Las increíbles recetas del abuelo. ¡Aprende las recetas\\nsecretas de tu abuelo que aumentan las estadísticas y los atributos! Cocina un 50 % más rápido.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillStrengthConstruction": {
                "name_key": "skillStrengthConstructionName",
                "name": "Beneficios de construcción",
                "icon": "ui_game_symbol_resource",
                "perks": {
                    "perkMiner69r": {
                        "name_key": "perkMiner69rName",
                        "parent": "skillStrengthConstruction",
                        "name": "Minero del 69",
                        "icon": "ui_game_symbol_mining",
                        "description": "Maximiza tus esfuerzos mineros aumentando el daño de las herramientas para derribar rocas y árboles más rápido.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Pinza para herramientas",
                                "long_description": "Todo el mundo tiene que empezar en algún momento. Crea herramientas de calidad 2 deficiente, aumenta el daño de la herramienta en un 10 % y el daño en bloque en un 30 % con cualquier hacha, pico, pala, motosierras o barrena.\\nDesbloquea todas las armas de hierro como los picos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Johnny Newcome",
                                "long_description": "Todavía estás un poco verde, pero ya no vas a por el café de los mineros. Crea herramientas de calidad 3 justa, aumenta el daño de la herramienta en un 20 % y el daño en bloque en un 60 % con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Minero",
                                "long_description": "Ahora eres un minero profesional o lo que en su día llamaron minero, a secas. Crea herramientas de calidad 4 buena, aumenta el daño de la herramienta en un 30 % y el daño en bloque en un 90 % con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Rompepiedras",
                                "long_description": "Ahora puedes romper roca con los mejores. Crea herramientas de calidad 5 genial, aumenta el daño de la herramienta en un 40 % y el daño en bloque en un 120 % con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Minero del 69",
                                "long_description": "Eres el legendario Minero del 69 y puedes encontrar el centro jugoso de cualquier roca más rápido que una rana toro caliente. Aumenta el daño en un 50 % y el daño en bloque en un 150 % con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            }
                        }
                    },
                    "perkMotherLode": {
                        "name_key": "perkMotherLodeName",
                        "parent": "skillStrengthConstruction",
                        "name": "La veta madre",
                        "icon": "ui_game_symbol_mother_load",
                        "description": "Cosecha más recursos y trae a casa la veta madre.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fuerza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fuerza 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de fuerza 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de fuerza 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de fuerza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Terreno provechoso",
                                "long_description": "Has encontrado tu primera vena pequeña y eres la envidia de todos los novatos.\\nConsigue un 20 % más de minerales, piedras, bloques de terreno y árboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Vena principal",
                                "long_description": "Encontrar más mineral se está convirtiendo en algo natural para ti. Cosecha un 40 % más de minerales, piedras, bloques de terreno y árboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Has encontrado oro",
                                "long_description": "Has dado un gran paso y probablemente puedas ganarte la vida decentemente con esto. Cosecha un 60 % más de minerales, piedras, bloques de terreno y árboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Mina de Oro",
                                "long_description": "Vas a necesitar un cochecito de bebé irlandés para llevar todo este mineral. Cosecha un 80 % más de minerales, piedras, bloques de terreno y árboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "La veta madre",
                                "long_description": "La minería es una segunda naturaleza para ti y encuentras la veta madre dondequiera que vayas. Cosecha un 100 % más de minerales, piedras, bloques de terreno y árboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            }
                        }
                    }
                }
            }
        }
    },
    "attFortitude": {
        "name_key": "attFortitudeName",
        "name": "Atributo: Fortaleza",
        "icon": "ui_game_symbol_add",
        "description": "La fortaleza es la medida de tu resistencia física.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Salud frágil",
                "long_description": "No eres muy fiable ni saludable, pero por lo menos estás vivo. Inflige un 200 % de daño por un disparo en la cabeza y tienes un 5 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 1
            },
            "2": {
                "short_description": "Enfermito",
                "long_description": "Te sientes un poco mejor que antes. Inflige un 210 % de daño por un disparo en la cabeza y tienes un 10 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 1
            },
            "3": {
                "short_description": "Insalubre",
                "long_description": "Sigues desafiando la gravedad y sigues en pie. Inflige un 220 % de daño por un disparo en la cabeza y tienes un 15 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 1
            },
            "4": {
                "short_description": "Debilitado",
                "long_description": "Empiezas a sentirte como la gente normal. Reparte el 230 % de los daños causados por un disparo en la cabeza y tienes un 20 % de posibilidades de desmembrar con los puños y las ametralladoras.",
                "cost": 1
            },
            "5": {
                "short_description": "Robusto",
                "long_description": "Gozas de buena salud. Inflige un 240 % de daño por un disparo en la cabeza y tienes un 25 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 1
            },
            "6": {
                "short_description": "Muy saludable",
                "long_description": "Estás muy saludable. Inflige un 250 % de daño por un disparo en la cabeza y tienes un 30 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 2
            },
            "7": {
                "short_description": "Salud vigorosa",
                "long_description": "Tienes una salud vigorosa. Inflige un 260 % de daño por un disparo en la cabeza y tienes un 35 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 2
            },
            "8": {
                "short_description": "Resistente",
                "long_description": "Eres tan resistente como el que más. Inflige un 270 % de daño por un disparo en la cabeza y tienes un 40 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 2
            },
            "9": {
                "short_description": "Asombrosa constitución",
                "long_description": "Tienes una constitución increíble. Inflige un 285 % de daño por un disparo en la cabeza y tienes un 45 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 3
            },
            "10": {
                "short_description": "Fortaleza exuberante",
                "long_description": "Tienes una fortaleza exuberante y puedes darle una paliza a un tornado. Inflige un 300 % de daño por un disparo en la cabeza y tienes un 50 % de posibilidades de desmembrar con puños y ametralladoras.",
                "cost": 3
            }
        },
        "skills": {
            "skillFortitudeCombat": {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": {
                    "perkBrawler": {
                        "name_key": "perkBrawlerName",
                        "parent": "skillFortitudeCombat",
                        "name": "El alborotador",
                        "icon": "ui_game_symbol_boxer",
                        "description": "Aprende artes marciales y usa tus puños para aturdir, derribar, desarmar y deshazte de tu oponente.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Acosador",
                                "long_description": "¿Te cansa que te intimiden los no-muertos? ¡Los zombis no pueden morder si les arrancas sus malditos dientes! Crea armas de nudillos de calidad 2 deficiente e inflige un 10 % más de daño con los puños. Los golpes en la cabeza niegan la capacidad de infección. Desbloquea nudillos de hierro hechos a mano.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Rascador",
                                "long_description": "Has estado en algunas peleas y puedes resistir. Fabrica armas de nudillos de calidad 3 justa e inflige un 20 % más de daño con los puños y obtén un 30 de posibilidades de hacer tambalearse a tus oponentes con ataques poderosos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Bateador",
                                "long_description": "Todas las peleas y trifulcas han dado sus frutos y ahora eres un verdadero bateador. Fábrica armas de nudillos de calidad 4 buena e inflige un 30 % más de daño con los puños. Los ataques poderosos a la cabeza tienen un 20 % de posibilidades de derribar a tu oponente.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Boxeador profesional",
                                "long_description": "Ahora eres lo suficientemente bueno para competir en el boxeo profesional, pero por ahora, aplastar las caras de los zombis tendrá que bastar. Fabrica armas de nudillos de calidad 5 genial e inflige un 40 % más de daño con los puños. Los ataques poderosos a la cabeza tienen un 30 % de posibilidades de derribar a tu oponente.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Artista en artes marciales mixtas",
                                "long_description": "Ahora eres un completo artista en artes marciales mixtas y eres un arma letal registrada. Inflige un 50 % más de daño y tendrás posibilidades más altas de hacer explotar cabezas con tus puñetazos.",
                                "cost": 1
                            }
                        }
                    },
                    "perkMachineGunner": {
                        "name_key": "perkMachineGunnerName",
                        "parent": "skillFortitudeCombat",
                        "name": "Ametrallador",
                        "icon": "ui_game_symbol_rifle",
                        "description": "Conviértete en un comando usando rifles de asalto para matar a tus enemigos.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Gruñido",
                                "long_description": "Lo tuyo es rociar y rezar. Crea ametralladoras de calidad 2 deficiente. Inflige un 10% más de daño, un 5 % más de velocidad de disparo y un 10 % más de recarga con armas cortas.\\nDesbloquea la creación de Ak47.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Guerrilla",
                                "long_description": "No eres un comando, pero haces lo que sea necesario para cumplir con el trabajo. Crea ametralladoras de calidad 3 justa, infligen un 20 % más de daño, un 10 % más de velocidad de disparo y recargan un 15 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Soldado",
                                "long_description": "Participar en tantos combates ha agudizado tus habilidades y ahora eres un soldado. Crea ametralladoras de calidad 4 buena, infligen un 30 % más de daño, un 15% más de velocidad de disparo y recargan un 20 % más rápido. Comando Adrenalina: Cada tiro marcado con armas automáticas te da 2 de resistencia.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Fuerzas especiales",
                                "long_description": "Tu habilidad ahora es comparable a la de las fuerzas especiales. Fabrica ametralladoras de calidad 5 genial, inflige un 40 % más de daño, aumenta la velocidad de disparo en un 20 % y recarga un 25 % más rápido. Comando Adrenalina: Cada tiro acertado con armas automáticas te da 4 de resistencia.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ametrallador",
                                "long_description": "Ahora eres el mejor ametrallador. Inflige un 50 % más de daño, con un 25 % más de velocidad de disparo y recarga un 30 % más rápida. Comando Adrenalina: Cada tiro marcado con armas automáticas te da 6 de resistencia.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillFortitudeSurvival": {
                "name_key": "skillFortitudeSurvivalName",
                "name": "Beneficios de supervivencia",
                "icon": "ui_game_symbol_survival",
                "perks": {
                    "perkTheHuntsman": {
                        "name_key": "perkTheHuntsmanName",
                        "parent": "skillFortitudeSurvival",
                        "name": "El cazador",
                        "icon": "ui_game_symbol_archery",
                        "description": "Especialízate en cazar a tu presa y cosechar más carne, hueso y cuero.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Peletero",
                                "long_description": "Estás en la senda del cazador. Cosecha un 20 % más de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cazador furtivo",
                                "long_description": "Te estás volviendo adepto y estás desollando y cosechando carne. Cosecha un 40 % más de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cazador",
                                "long_description": "Vivir en la naturaleza se está convirtiendo en algo natural para ti. Cosecha un 60 % más de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Carnicero",
                                "long_description": "Sabes exactamente cómo conseguir los cortes perfectos. Cosecha un 80 % más de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "El cazador",
                                "long_description": "Eres un verdadero hombre de montaña y no dejas que nada se desperdicie. Cosecha un 100 % más de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            }
                        }
                    },
                    "perkWellInsulated": {
                        "name_key": "perkWellInsulatedName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Bien aislado",
                        "icon": "ui_game_symbol_temperature",
                        "description": "Especialízate en usar una combinación de ropa y resistencia natural para sobrevivir incluso en los ambientes más hostiles.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tolerancia al clima templado",
                                "long_description": "Te gusta el clima templado, pero puedes soportar un poco de fluctuación de temperatura. Obtienes 10 de aislamiento contra el calor y contra el frío y pierdes un 15 % menos de comida y agua cuando tienes frío o demasiado calor.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Resistente a las inclemencias climáticas",
                                "long_description": "Eres resistente al clima muy intenso y pierdes un 30 % menos de comida y agua cuando tienes frío o demasiado calor. Obtienes 20 de aislamiento contra el calor y contra el frío.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Extremadamente inmune a los elementos",
                                "long_description": "Ahora puedes soportar el clima extremadamente intenso y, en general, no te importan las condiciones climáticas. Nunca sufrirás las etapas más graves de los efectos del estado por temperatura.",
                                "cost": 1
                            }
                        }
                    },
                    "perkLivingOffTheLand": {
                        "name_key": "perkLivingOffTheLandName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Vivir de la tierra",
                        "icon": "ui_game_symbol_tree",
                        "description": "Especialícese en cosechar más cultivos usando sus manos o una herramienta.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Recolector",
                                "long_description": "Duplica la cosecha de los cultivos silvestres o plantados. Puedes fabricar semillas para flores y plantas decorativas como vara de oro, crisantemo, aloe y yuca.\\nCrear las parcelas agrícolas cuesta un 30 % menos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Forastero",
                                "long_description": "Puedes hacer semillas para bayas y verduras.\\nCrear las parcelas agrícolas cuesta un 50 % menos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Granjero",
                                "long_description": "Triplica la cosecha de los cultivos silvestres o plantados.",
                                "cost": 1
                            }
                        }
                    },
                    "perkPainTolerance": {
                        "name_key": "perkPainToleranceName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Tolerancia al dolor",
                        "icon": "ui_game_symbol_character",
                        "description": "Especialízate en encogerte de hombros ante los golpes, luchar contra el dolor y permanecer en la pelea cuando los demás no valgan para nada. ",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Duro",
                                "long_description": "Te gusta pensar que eres duro porque ya no tienes mandíbula de cristal. Reduce las pérdidas de PS un 5 %.\\n20 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Curtido",
                                "long_description": "Los huesos rotos y los cortes son la vida cuando uno está curtido. Reduce las pérdidas de PS un 10 %.\\n40 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Resistente",
                                "long_description": "Después de todos los golpes que has soportado, ahora eres muy resistente. Reduce las pérdidas de PS un 15 % y tienes un 60 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Masoquista",
                                "long_description": "Va a hacer falta mucho más que eso para derribarte. Reduce las pérdidas de PS un 20 % y tienes un 80 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Mentón de hierro",
                                "long_description": "Parece que te gusta el dolor y ahora tienes un mentón de hierro. Reduce las pérdidas de PS un 25 % y no tienes probabilidades de quedar aturdido.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillFortitudeRecovery": {
                "name_key": "skillFortitudeRecoveryName",
                "name": "Beneficios de recuperación",
                "icon": "ui_game_symbol_water",
                "perks": {
                    "perkHealingFactor": {
                        "name_key": "perkHealingFactorName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Factor de curación",
                        "icon": "ui_game_symbol_healing_factor",
                        "description": "Especialízate en aumentar las tasas naturales de curación siempre y cuando no te estés muriendo de hambre.\\n\\nla autocuración no funcionará cuando se te acabe la comida o el agua.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Metabolismo rápido",
                                "long_description": "Debes tener un metabolismo rápido. Obtienes 1 de salud cada 90 segundos con una curación natural. Las heridas críticas se curan un 20 % más rápido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Sanador rápido",
                                "long_description": "Pareces ser un sanador rápido. Obtienes 1 de salud cada 45 segundos con curación natural. Las heridas críticas se curan un 40 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Animal",
                                "long_description": "¿Eres parte animal? Obtienes 1 de salud cada 20 segundos con curación natural. Las heridas críticas se curan un 60 % más rápido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Regeneración",
                                "long_description": "Parece que regeneras tu salud súper rápido. Obtienes 1 de salud cada 10 segundos con curación natural. Las heridas críticas se curan un 80 % más rápido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Genes mutantes",
                                "long_description": "Debes tener genes mutantes por culpa de la radiación. Obtienes 1 de salud cada 6 segundos con curación natural. Las heridas críticas se curan el doble de rápido.",
                                "cost": 1
                            }
                        }
                    },
                    "perkSlowMetabolism": {
                        "name_key": "perkSlowMetabolismName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Tripa de hierro",
                        "icon": "ui_game_symbol_stomach",
                        "description": "Especialízate en salud gastrointestinal para usar menos calorías y beneficiarte más con la comida. Usa menos oxígeno al nadar.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de fortaleza 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de fortaleza 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Fugas en el intestino",
                                "long_description": "La salud de tu estómago no es perfecta, pero es mejor que la de un merodeador promedio. Reduce la pérdida de comida y agua por esfuerzo físico en un 5 %.\\nPuedes mantener la respiración durante 84 segundos. La posibilidad de disentería se reduce en un 1 %. Los potenciadores de los elementos consumibles duran un 10 % más.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Una constitución fuerte",
                                "long_description": "Te sales con la tuya comiendo muchas cosas que matarían a la mayoría de la gente. Reduce la pérdida de comida y agua por esfuerzo físico en un 10 %.\\nPuedes mantener la respiración durante 108 segundos. La posibilidad de disentería se reduce en un 2 %. Los potenciadores de los elementos consumibles duran un 20 % más.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Gran metabolismo",
                                "long_description": "Incluso cuando te sientes un poco enfermo, tiendes a superarlo rápidamente. Reduce la pérdida de comida y agua por esfuerzo físico en un 15 %.\\nPuedes mantener la respiración durante 132 segundos. La posibilidad de disentería se reduce en un 3 %. Los potenciadores de los elementos consumibles duran un 30 % más.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Inmunidad intrínseca",
                                "long_description": "Parece que eres casi inmune a todo lo que comes. Reduce la pérdida de comida y agua por esfuerzo físico en un 20 %.\\nPuedes mantener la respiración durante 156 segundos. La posibilidad de disentería se reduce en un 4 %. Los potenciadores de los elementos consumibles duran un 40 % más.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Tripa de hierro",
                                "long_description": "Tienes un estómago de hierro y probablemente podrías comer cristal y sobrevivir. Reduce la pérdida de comida y agua por esfuerzo físico en un 25 %.\\nPuedes mantener la respiración durante 180 segundos. La posibilidad de disentería se reduce en un 5 %. Los potenciadores de los consumibles duran un 50 % más.",
                                "cost": 1
                            }
                        }
                    },
                    "perkRuleOneCardio": {
                        "name_key": "perkRuleOneCardioName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Regla 1: Cardio",
                        "icon": "ui_game_symbol_cardio",
                        "description": "Entrénate en la mejor táctica anti zombis: Huir de ellos.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de fortaleza 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de fortaleza 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de fortaleza 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Senderista",
                                "long_description": "Solo tienes que pones un pie delante del otro. Ahora eres un senderista. Aumenta la regeneración de la resistencia en un 10% al correr.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "El hombre que corre",
                                "long_description": "Todos los uniformes están en el espejo retrovisor ahora, ya que eres un corredor con una cardio excelente. Aumenta la regeneración de la resistencia en un 20 % al correr.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Triatleta",
                                "long_description": "Aumenta la regeneración de la resistencia en un 30 % al correr.",
                                "cost": 1
                            }
                        }
                    }
                }
            }
        }
    },
    "attAgility": {
        "name_key": "attAgilityName",
        "name": "Atributo: Agilidad",
        "icon": "ui_game_symbol_agility",
        "description": "La agilidad es la medida de tu destreza atlética.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Torpe",
                "long_description": "Eres lo más torpe que jamás se ha visto, pero aún así infliges un 200 % de daño en la cabeza y tienes un 5 % de posibilidades de desmembrar con arcos, pistolas y cuchillos.",
                "cost": 1
            },
            "2": {
                "short_description": "Titubeo",
                "long_description": "No conseguiste entrar en el equipo de fútbol, pero eso no te ha impedido entrenar. Inflige un 210 % de daños causado por un disparo en la cabeza y tienes un 10 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "3": {
                "short_description": "Tosco",
                "long_description": "Sigues siendo ruidoso y tosco, pero puedes infligir un 220 % de daño en la cabeza y tienes un 15 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "4": {
                "short_description": "Inepto",
                "long_description": "Tu destreza es un poco inepta, pero puedes infligir un 230 % de daño en la cabeza y tienes un 20 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "5": {
                "short_description": "Ágil",
                "long_description": "Ahora eres ágil y tienes un 240 % de daño en la cabeza y un 25 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "6": {
                "short_description": "Ágil",
                "long_description": "Tu movimiento es ahora muy ágil y causa un 250 % de daño en los tiros a la cabeza y tienes un 30 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "7": {
                "short_description": "Destreza",
                "long_description": "Tu destreza es impresionante. Inflige un 260 % de daño causado por disparo en la cabeza y tienes un 35 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "8": {
                "short_description": "Gimnasta",
                "long_description": "Desplazarte con fluidez y aterrizar en tus pies son una habilidad natural para ti. Inflige un 270 % de daño causado por disparo en la cabeza y tienes un 40 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "9": {
                "short_description": "Atleta profesional",
                "long_description": "Tu agilidad es tan buena que podrías ser un atleta profesional. Inflige un 285 % de daño causado por disparo en la cabeza y tienes un 45 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 3
            },
            "10": {
                "short_description": "Maestro del parkour",
                "long_description": "Tu destreza es inigualable. Inflige un 300 % de daño causado por disparo en la cabeza y tienes un 50 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 3
            }
        },
        "skills": {
            "skillAgilityCombat": {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": {
                    "perkArchery": {
                        "name_key": "perkArcheryName",
                        "parent": "skillAgilityCombat",
                        "name": "Arquería",
                        "icon": "ui_game_symbol_archery",
                        "description": "Domina el uso de arcos y ballestas.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de agilidad 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Arquero",
                                "long_description": "Muchos inician la senda del cazador, pero pocos la pueden terminar. Crea 2 arcos de calidad deficiente, infligen un 10 % más de daño, un 10 % más de velocidad de puntería, tiro y recarga con arcos. Desbloquea la fabricación del arco de madera y la ballesta de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Arquero",
                                "long_description": "Aun tienes mucho que aprender, pequeño saltamontes. Crea 3 arcos de calidad media, infligen un 20 % más de daño, un 20 % más de velocidad de puntería, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Tirador",
                                "long_description": "Todo el riguroso entrenamiento te ha convertido en un tirador con arcos. Crea 4 arcos de calidad buena, infligen un 30 % más de daño, un 30 % más de velocidad de puntería, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Peluquero",
                                "long_description": "Has mejorado tanto en la arquería que puedes peinar a cualquiera a distancia con la flecha. Crea 5 arcos de calidad genial, infligen un 40 % más de daño, un 40 % más de velocidad de puntería, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Cazador",
                                "long_description": "Has dominado la arquería y ahora eres un cazador. Inflige un 50 % más de daño, un 50 % más rápido, apunta, desenfunda y recarga con arcos.",
                                "cost": 1
                            }
                        }
                    },
                    "perkGunslinger": {
                        "name_key": "perkGunslingerName",
                        "parent": "skillAgilityCombat",
                        "name": "Pistola fácil",
                        "icon": "ui_game_symbol_gunslinger",
                        "description": "Resuelve tus disputas a la antigua usanza y sé un pistolero en el apocalipsis. Domina el uso de las armas cortas y las metralletas. Desbloquea la fabricación de pistolas.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de agilidad 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tirador de guisantes",
                                "long_description": "No eres Wyatt Earp, pero eres mejor que el vagabundo promedio. Crea armas cortas de calidad 2 deficiente, infligen un 10 % más de daño, un 5 % más de velocidad de disparo y un 10 % más de velocidad de recarga con armas cortas.\\nDesbloquea la fabricación de pistolas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Forajido",
                                "long_description": "Te estás haciendo un nombre, forajido. Crear armas cortas de calidad 3 justa, infligen un 20 % más de daño, un 10% más de velocidad de disparo, y recargan un 15 % más rápido con armas cortas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Sheriff",
                                "long_description": "Puedes mantener la mayoría de las situaciones bajo control, sheriff. Crear armas cortas de calidad 4 buena, infligen un 30 % más de daño, un 15 % más de velocidad de disparo y recargan un 20 % más rápido. Daños Críticos: 5 impactos sucesivos en poco tiempo causan daños críticos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Pistolero",
                                "long_description": "Ahora eres un pistolero y puedes limpiar un salón lleno de cabrones alborotadores en un abrir y cerrar de ojos. Crear armas cortas de calidad 5 genial, infligen un 40 % más de daño, un 20 % más de velocidad de disparo y recargan un 25 % más rápido. Daños Críticos: 4 impactos sucesivos en poco tiempo hacen que el último tiro inflija un 100 % de daño extra.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Pistola fácil",
                                "long_description": "Eres el pistolero más rápido de Navezgane. Inflige un 50% más de daño, un 25 % más de velocidad de disparo y un 30 % más de recarga con armas cortas. Daños críticos: 3 impactos sucesivos en poco tiempo hacen que el último tiro inflija un 100 % de daño extra.",
                                "cost": 1
                            }
                        }
                    },
                    "perkDeepCuts": {
                        "name_key": "perkDeepCutsName",
                        "parent": "skillAgilityCombat",
                        "name": "Cortes profundos",
                        "icon": "ui_game_symbol_deep_cuts",
                        "description": "Especialízate en usar armas blancas como cuchillos o machetes (no hachas) para desangrar a tus enemigos.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de agilidad 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Hoja sin filo",
                                "long_description": "Puede que tengas una cuchilla desafilada, pero sabes cómo usarla. Crea cuchillos malos de calidad 2 e inflige un 10 % más de daño. Puedes infligir hasta 3 heridas con sangrado a un enemigo y un ataque poderoso inflige 2. Cada ataque renueve la duración del sangrado. Los enemigos corren un 10 % más despacio mientras sangran.\\nDesbloquea la creación de cuchillos de caza.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Chico de los cuchillos",
                                "long_description": "Tus amigos dicen que eres el verdadero chico de los cuchillos. Crea 3 cuchillos de calidad 3 justa e inflige un 20 % más de daño. Puedes infligir hasta 4 heridas con sangrado a un enemigo y un ataque poderoso inflige 3.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Maestro de esgrima",
                                "long_description": "Estás por encima del resto. Crea cuchillos buenos de calidad 4 e inflige un 30 % más de daño. Puedes infligir hasta 5 heridas con sangrado a un enemigo y un ataque poderoso inflige 4. Los golpes de refilón tienen un 40 % de posibilidades de causar 1 herida con sangrado. Los enemigos corren un 15 % más despacio mientras sangran.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Espadachín",
                                "long_description": "Eres bastante letal con las armas blancas. Crea cuchillos excelentes de calidad 5 e inflige un 40 % más de daño. Puedes infligir hasta 6 heridas con sangrado a un enemigo y un ataque poderoso inflige 4. Los golpes de refilón tienen un 70 % de posibilidades de causar 1 herida con sangrado.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Samurái",
                                "long_description": "Eres un samurái y puedes hacer sushi con tus enemigos. Inflige un 50 % más de daño. Puedes infligir hasta 7 heridas con sangrado a un enemigo y un ataque poderoso inflige 5. Todos los golpes de refilón causan 1 herida con sangrado. Los enemigos corren un 20 % más despacio mientras sangran.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillAgilityAthletics": {
                "name_key": "skillAgilityAthleticsName",
                "name": "Beneficios atléticos",
                "icon": "ui_game_symbol_run",
                "perks": {
                    "perkRunAndGun": {
                        "name_key": "perkRunAndGunName",
                        "parent": "skillAgilityAthletics",
                        "name": "Correr y disparar",
                        "icon": "ui_game_symbol_run_and_gun",
                        "description": "Mejora la precisión de disparo en marcha y corre más rápido mientras recargas cualquier arma a distancia.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Rociar y orar",
                                "long_description": "Rociar y orar. Apuntar está sobrevalorado, dispara primero y haz preguntas después. La precisión de disparo en marcha mejora un 10 % y la penalización de movimiento al recargar se reduce en un 30 %.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Dedos nerviosos",
                                "long_description": "Tus dedos nerviosos pueden meterte en problemas pero te han salvado la piel en muchas ocasiones. La precisión de disparo en marcha mejora un 17 % y la penalización de movimiento al recargar se reduce en un 60 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Hombre gatillo",
                                "long_description": "Ahora eres un hombre gatillo mortal y has dominado el arte de correr y disparar. La precisión de disparo en marcha mejora en un 25 % y no tiene penalización de movimiento al recargar.",
                                "cost": 1
                            }
                        }
                    },
                    "perkFlurryOfBlows": {
                        "name_key": "perkFlurryOfBlowsName",
                        "parent": "skillAgilityAthletics",
                        "name": "Aluvión de golpes",
                        "icon": "ui_game_symbol_knunchuck",
                        "description": "Especialízate en armas cuerpo a cuerpo con una sola mano y en sacarle los dientes a tus oponentes en una furiosa ráfaga de golpes rápidos.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Manos rápidas",
                                "long_description": "Has desarrollado manos rápidas. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 10 %.\\n\\nEste beneficio se aplica a palos, peleas, cuchillos, machetes y porras paralizantes.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Ataque inesperado",
                                "long_description": "Has desarrollado el ataque inesperado. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 17 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Aluvión de golpes",
                                "long_description": "Has dominado la ráfaga de golpes. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 25 %. Cada muerte recarga 30 puntos de resistencia.",
                                "cost": 1
                            }
                        }
                    },
                    "perkLightArmor": {
                        "name_key": "perkLightArmorName",
                        "parent": "skillAgilityAthletics",
                        "name": "Armadura ligera",
                        "icon": "ui_game_symbol_light_armor2",
                        "description": "Especialízate en blindaje ligero para aumentar la tasa y la durabilidad del blindaje.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Escudero",
                                "long_description": "Has empezado en la senda del guerrero con armadura ligera. Crea armadura ligera de calidad 2 deficiente, reduce la penalización por movimiento de la armadura ligera un 15 % y la penalización por resistencia un 10 %. Mejora la durabilidad en un 50 %.\\nDesbloquea la elaboración de armaduras de cuero.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Militante",
                                "long_description": "Has sobrevivido a algunas batallas y esperas ser un caballero algún día. Crea armadura ligera de calidad 3 justa, reduce la penalización por movimiento de la armadura ligera un 30 % y la penalización por resistencia un 20%. Mejora la durabilidad en un 100 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Caballero",
                                "long_description": "Todo el duro entrenamiento y las batallas han dado sus frutos, ahora eres un caballero. Crea armadura ligera de calidad 4 buena, reduce la penalización por movimiento de la armadura ligera un 50 % y la penalización por resistencia un 35 %. Mejora la durabilidad en un 150 %.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Gladiador",
                                "long_description": "Te has hecho un nombre por ti mismo y eres temido por casi todos, ya que ahora eres un gladiador. Crea armadura ligera de calidad 5 genial, reduce la penalización por movimiento de la armadura ligera un 6 0% y la penalización por resistencia un 50 %. Mejora la durabilidad en un 200 %.",
                                "cost": 1
                            }
                        }
                    },
                    "perkParkour": {
                        "name_key": "perkParkourName",
                        "parent": "skillAgilityAthletics",
                        "name": "Parkour",
                        "icon": "ui_game_symbol_parkour",
                        "description": "Especialízate en llegar acrobáticamente a cualquier lugar al que quieras ir, sin importar cuán lejos o abajo pueda estar.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel de agilidad 8",
                                "required_level": 8
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Mareado",
                                "long_description": "Puedes hacer algunos movimientos, pero sobre todo estás acostumbrado a caer de bruces. Aumenta la distancia segura de caída en un metro y reduce el costo de resistencia de los saltos en un 10 %.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Especialista",
                                "long_description": "Te han salido algunos trucos, pero a veces sus cuentas del hospital son más grandes que lo que cobras. Reduce en un 20 % el costo de la resistencia al saltar. Aumenta la distancia segura de caída en 2 metros y saltas 1 metro más alto.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Adicto a la adrenalina",
                                "long_description": "Ahora eres un adicto a la adrenalina, y asombras a una gran multitud con tus temerosos actos. Reduce en un 30 % el costo de la resistencia al saltar. Aumenta la distancia segura de caída en 4 metros y nunca te fracturarás las piernas al caer.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Maestro del parkour",
                                "long_description": "Ahora eres un maestro del parkour y puedes desenvolverte fácilmente en situaciones difíciles. Reduce en un 40 % el costo de la resistencia al saltar. Aumenta la distancia segura de caída en 5 metros, puedes saltar 2 metros más alto y nunca te romperás ni te esguinzarás una pierna al caer.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillAgilityStealth": {
                "name_key": "skillAgilityStealthName",
                "name": "Beneficios de sigilo",
                "icon": "ui_game_symbol_stealth2",
                "perks": {
                    "perkHiddenStrike": {
                        "name_key": "perkHiddenStrikeName",
                        "parent": "skillAgilityStealth",
                        "name": "Ataque oculto",
                        "icon": "ui_game_symbol_sneak_attack",
                        "description": "Especialízate en atrapar a tus enemigos desprevenidos mientras te escabulles y están descansando o deambulando sin rumbo.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de agilidad 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Rajagargantas",
                                "long_description": "Eres un rajagargantas que prefiere operar desde las sombras y usar el sigilo y los ataques furtivos. Los ataques sigilosos causan un 50 % más de daño.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Carnicero",
                                "long_description": "Ahora eres un carnicero y has acumulado algunas habilidades y estás dominando el asesinato de arte del asesinato. Los ataques sigilosos causan un 100 % más de daño.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Verdugo",
                                "long_description": "Ahora eres un verdugo y estás empezando a dominar tu oficio. Los ataques sigilosos causan un 150 % más de daño.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Asesino a sangre fría",
                                "long_description": "Eres un asesino a sangre fría y no sientes remordimientos haciendo tus actos oscuros. Los ataques sigilosos causan un 200 % más de daño.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Asesino",
                                "long_description": "Ahora eres el asesino definitivo y puedes infligir el máximo daño a tus víctimas. Los ataques sigilosos causan un 250 % más de daño.",
                                "cost": 1
                            }
                        }
                    },
                    "perkFromTheShadows": {
                        "name_key": "perkFromTheShadowsName",
                        "parent": "skillAgilityStealth",
                        "name": "De entre las sombras",
                        "icon": "ui_game_symbol_bat",
                        "description": "Especialícese en andar a escondidas en la oscuridad y hacer menos ruido en general.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de agilidad 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de agilidad 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de agilidad 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de agilidad 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de agilidad 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Acechador",
                                "long_description": "Escóndete en las sombras un 13 % más efectivamente, los ruidos de las acciones se amortiguan un 10 % y el movimiento furtivo es un 10 % más rápido.\\nLos enemigos te buscarán hasta por 50 segundos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Sombrador",
                                "long_description": "Escóndete en las sombras un 26 % más efectivamente, los ruidos de las acciones se amortiguan un 20 % y el movimiento furtivo es un 20% más rápido.\\nLos enemigos te buscarán hasta por 40 segundos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Acosador",
                                "long_description": "Escóndete en las sombras un 39 % más efectivamente, los ruidos de las acciones se amortiguan un 30 %, y el movimiento furtivo es un 30% más rápido.\\nLos enemigos te buscarán hasta por 30 segundos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Merodeador",
                                "long_description": "Escóndete en las sombras un 52 % más efectivamente, los ruidos de las acciones se amortiguan un 40 %, y el movimiento furtivo es un 40% más rápido.\\nLos enemigos te buscarán hasta por 25 segundos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ninja de las sombras",
                                "long_description": "Escóndete en las sombras un 65 % más efectivamente, los ruidos de las acciones se amortiguan un 50 % y el movimiento furtivo es un 50% más rápido.\\nLos enemigos te buscarán hasta por 20 segundos.",
                                "cost": 1
                            }
                        }
                    }
                }
            }
        }
    },
    "attIntellect": {
        "name_key": "attIntellectName",
        "name": "Atributo: Intelecto",
        "icon": "ui_game_symbol_intellect",
        "description": "El intelecto es la medida de tu capacidad mental. Incrementar el intelecto mejora el daño por disparos a la cabeza con armas regidas por el intelecto como las torretas robóticas y las porras de aturdimiento.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Cabeza de bloque",
                "long_description": "Eres tonto como tú solo, pero sigues causando un 200 % de daño por disparo a la cabeza y tienes un 5 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 1
            },
            "2": {
                "short_description": "Zoquete",
                "long_description": "No eres el más brillante, pero de vez en cuando das en el clavo. Infliges un 210 % de daño por disparo a la cabeza y tienes un 10 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 1
            },
            "3": {
                "short_description": "Idiota",
                "long_description": "Incluso a los más tontos se les ocurren cosas geniales de vez en cuando. Infliges un 220 % de daño por disparo a la cabeza y tienes un 15 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 1
            },
            "4": {
                "short_description": "Cabezón",
                "long_description": "No te gusta aprender cosas nuevas, pero lo harás si es necesario. Infliges un 230 % de daño por disparo a la cabeza y tienes un 20 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 1
            },
            "5": {
                "short_description": "Promedio",
                "long_description": "Ser promedio es mejor que estar por debajo de la media. Infliges un 240 % de daño por disparo a la cabeza y tienes un 25 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 1
            },
            "6": {
                "short_description": "Inteligente",
                "long_description": "Te estás volviendo muy listo. Infliges un 250 % de daño por disparo a la cabeza y tienes un 30 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 2
            },
            "7": {
                "short_description": "Brillante",
                "long_description": "Tus compañeros te consideran brillante. Infliges un 260 % de daño por disparo a la cabeza y tienes un 35 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 2
            },
            "8": {
                "short_description": "Intelectual",
                "long_description": "Tu intelecto es impresionante. Infliges un 270 % de daño por disparo a la cabeza y tienes un 40 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 2
            },
            "9": {
                "short_description": "Genio",
                "long_description": "Ahora eres un verdadero genio. Infliges un 285 % de daño por disparo a la cabeza y tienes un 45 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas.",
                "cost": 3
            },
            "10": {
                "short_description": "Mente maestra",
                "long_description": "Eres un genio del intelecto. Infliges un 300 % de daño por disparo a la cabeza y tienes un 50 % de posibilidades de desmembrar con porras de aturdimiento y torretas robóticas",
                "cost": 3
            }
        },
        "skills": {
            "skillIntellectCombat": {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": {
                    "perkElectrocutioner": {
                        "name_key": "perkElectrocutionerName",
                        "parent": "skillIntellectCombat",
                        "name": "Electrocutador",
                        "icon": "ui_game_symbol_electric_power",
                        "description": "Aprende a usar los bastones de aturdimiento de manera más efectiva. Incapacita a las víctimas más fácilmente e inflige más daño.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel Intelectual 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel Intelectual 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel Intelectual 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Bajo voltaje",
                                "long_description": "¿Dónde están las instrucciones? Eres inteligente, recuerda apuntarlo lejos de ti y apretar el gatillo. Crea porras de aturdimiento de calidad 2 deficientes, infligen un 10 % más de daño y aturden a las víctimas un 20 % más tiempo.\\nDesbloquea la elaboración del bastón de aturdimiento.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Pistola de aturdimiento",
                                "long_description": "Estás aprendiendo a usar porras paralizantes para incapacitar a tus enemigos. Crea porras de aturdimiento de calidad 3 justa, infligen un 20 % más de daño y aturden a las víctimas un 40 % más tiempo.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Pincho de ganado",
                                "long_description": "Te estás volviendo peligroso con las porras aturdidoras, probablemente podrías noquear al ganado si los zombis no se las hubieran comido todas. Crea porras de aturdimiento de calidad 4 buenas, infligen un 30% más de daño y aturden a las víctimas un 60% más tiempo.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Peligro: Alto voltaje",
                                "long_description": "Ahora eres letal con porras aturdidoras. Crea porras de aturdimiento de calidad 5 geniales, infligen un 40 % más de daño y aturden a las víctimas un 80 % más tiempo.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Electrocutador",
                                "long_description": "Eres lo último que ven venir y ahora eres un verdugo con porras de aturdimiento. Inflige un 50 % más de daño y aturde a las víctimas un 100 % más de tiempo.",
                                "cost": 1
                            }
                        }
                    },
                    "perkTurrets": {
                        "name_key": "perkTurretsName",
                        "parent": "skillIntellectCombat",
                        "name": "Creador de robótica",
                        "icon": "ui_game_symbol_electric_turret",
                        "description": "Te fascina la robótica. Aprende a usar y a fabricar armas desplegables.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 3",
                                "required_level": 3
                            },
                            "2": {
                                "description": "Nivel Intelectual 5",
                                "required_level": 5
                            },
                            "3": {
                                "description": "Nivel Intelectual 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel Intelectual 8",
                                "required_level": 8
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Proyectos científicos",
                                "long_description": "Tienes algunas ideas alocadas e innovadoras, pero su implementación podría necesitar algo de trabajo. Crea robots de calidad 2 deficiente, inflige un 10 % más de daño, aumenta la velocidad de disparo en un 30 % y recarga 10 rondas de balas adicionales. El alcance activo de los robots incrementa de 10 a 14 metros.\\nPuedes desplegar varios robots, pero solo los más cercanos estarán activas.\\nDesbloquea la fabricación de mazos robóticos",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Robótica básica",
                                "long_description": "Ahora estás llevando tus proyectos al siguiente nivel. Crea robots de calidad 3 justa, inflige un 20 % más de daño, aumenta la velocidad de disparo en un 60 % y recarga 20 rondas de balas adicionales. El alcance activo de los robots es de 15 metros.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Armamento automatizado",
                                "long_description": "Has dominado lo básico del armamento automatizado. Crea robots de calidad 4 buena, inflige un 30 % más de daño, aumenta la velocidad de disparo en un 90 % y recarga 30 rondas de balas adicionales. El alcance activo de los robots es de 16 metros.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Robótica avanzada",
                                "long_description": "Debes venir del año 2077, estás creando tecnología futurista. Crea robots de calidad 5 genial, inflige un 40 % más de daño, aumenta la velocidad de disparo en un 120 % y recarga 40 rondas de balas adicionales. Recarga las armas robóticas un 10 % más rápido. El alcance activo de los robots es de 17 metros.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Experto en robótica",
                                "long_description": "Ahora eres un experto en robótica. Recarga las armas robóticas un 20 % más rápido y recarga 50 rondas de balas adicionales. El alcance activo de los robots es de 18 metros.\\nDos robots desplegados pueden estar activos al mismo tiempo.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillIntellectInfluence": {
                "name_key": "skillIntellectInfluenceName",
                "name": "Beneficios de influencia",
                "icon": "ui_game_symbol_influence",
                "perks": {
                    "perkBetterBarter": {
                        "name_key": "perkBetterBarterName",
                        "parent": "skillIntellectInfluence",
                        "name": "Mejor trueque",
                        "icon": "ui_game_symbol_barter",
                        "description": "Especialízate en convencer a los comerciantes de la zona para que te den un mejor trato y te muestren dónde guardan las cosas realmente buenas.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel Intelectual 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel Intelectual 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel Intelectual 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Sobre ruedas",
                                "long_description": "Eres bueno regateando y comerciando, nunca pagas el precio inicial de nada. Obtén un 5 % más de descuento comprando y vendiendo mercancía con los comerciantes.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Vendedor",
                                "long_description": "Debes haber sido vendedor antes del apocalipsis, por el montón de buenos tratos que cierras. Obtén un 10 % más de descuento comprando y vendiendo con los comerciantes.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Gerente de ventas",
                                "long_description": "Actúas como un gerente de ventas y tienes la autoridad necesaria para hacer los mejores tratos. Obtén un 15 % más de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes oculta un botín mejor.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Magnate de Wall Street",
                                "long_description": "Te iría bien si el mercado de valores siguiera existiendo. Obtén un 20 % más de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes muestra un botín aún mejor.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Director general de marketing corporativo",
                                "long_description": "Eres como un Gerente Corporativo, compras bienes a los precios más bajos y vendes con una ganancia enorme. Obtén un 25 % más de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes muestra el mejor botín.",
                                "cost": 1
                            }
                        }
                    },
                    "perkDaringAdventurer": {
                        "name_key": "perkDaringAdventurerName",
                        "parent": "skillIntellectInfluence",
                        "name": "El aventurero temerario",
                        "icon": "ui_game_symbol_adventure",
                        "description": "¡Sé un aventurero temerario!\\nConsigue mejores recompensas por completar misiones.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel Intelectual 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel Intelectual 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel Intelectual 8",
                                "required_level": 8
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Saqueador",
                                "long_description": "Arriesgar el cuello todos los días tiene sus ventajas. Obtienes una opción adicional para las recompensas de las misiones y 5 % más ducados.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Saqueador",
                                "long_description": "Los comerciantes saben que puedes hacer el trabajo, saqueador. Obtienes dos opciones adicionales de recompensas de búsqueda y 10 % más ducados.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Mercenario",
                                "long_description": "Te has hecho un nombre como mercenario a sueldo. Obtienes tres opciones adicionales de recompensas de búsqueda y 15 % más ducados.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Aventurero audaz",
                                "long_description": "Tú eres el aventurero audaz y obtendrás las mejores recompensas por tus servicios. Ahora puedes elegir dos recompensas de búsqueda y 20 % más ducados.",
                                "cost": 1
                            }
                        }
                    },
                    "perkCharismaticNature": {
                        "name_key": "perkCharismaticNatureName",
                        "parent": "skillIntellectInfluence",
                        "name": "Naturaleza carismática",
                        "icon": "ui_game_symbol_talk",
                        "description": "Eres una inspiración para tus aliados, aumentando su destreza en el combate.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel Intelectual 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel Intelectual 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel Intelectual 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Inspiracional",
                                "long_description": "La gente se inspira cuando estás cerca de ellos. Los aliados cercanos suman 20 de salud y resistencia cuando están cerca de ti.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Líder del equipo",
                                "long_description": "Eres un líder de equipo e inspiras a los que te rodean. El daño en bloque y cuerpo a cuerpo de los aliados cercano aumentan en un 20 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Orador motivacional",
                                "long_description": "Eres una fuerza motivadora. Los aliados cercanos reciben un 10 % menos de daño de todo tipo, reciben la mitad del daño por hemorragia y dejan de sangrar el doble de rápido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Líder de escuadrón",
                                "long_description": "Tus habilidades de liderazgo son de primera clase. Los aliados están tan impresionados contigo que consiguen +1 de atributos cuando están cerca de ti.",
                                "cost": 1
                            }
                        }
                    }
                }
            },
            "skillIntellectCraftsmanship": {
                "name_key": "skillIntellectCraftsmanshipName",
                "name": "Beneficios de la artesanía",
                "icon": "ui_game_symbol_misc_crafting",
                "perks": {
                    "perkPhysician": {
                        "name_key": "perkPhysicianName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "Médico",
                        "icon": "ui_game_symbol_medical",
                        "description": "Usa los artículos de medicina y salud con más eficacia.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 3",
                                "required_level": 3
                            },
                            "2": {
                                "description": "Nivel Intelectual 6",
                                "required_level": 6
                            },
                            "3": {
                                "description": "Nivel Intelectual 8",
                                "required_level": 8
                            },
                            "4": {
                                "description": "Nivel Intelectual 9",
                                "required_level": 9
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Pasante",
                                "long_description": "Los artículos de curación curan un 25 % más de salud con el tiempo. Obtienes un 40 % más de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar estaciones químicas, vendajes de primeros auxilios y yesos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Doctor",
                                "long_description": "Los artículos de curación curan un 40 % más de salud con el tiempo. Obtienes un 60 % más de EXP usando vendas, vendas de primeros auxilios, botiquines de primeros auxilios y tablillas. Fabrica objetos un 20 % más rápido en las estaciones de química.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cirujano",
                                "long_description": "Los artículos de curación curan un 55 % más de salud con el tiempo. Obtienes un 80 % más de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar botiquines de primeros auxilios y esteroides.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Creador de milagros",
                                "long_description": "Creador de milagros. Los artículos de curación curan un 75 % más de salud con el tiempo. Obtienes un 100 % más de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar bocados de fortaleza, jarabe Recog y antibióticos. Fabrica objetos un 40 % más rápido en las estaciones de química.",
                                "cost": 1
                            }
                        }
                    },
                    "perkAdvancedEngineering": {
                        "name_key": "perkAdvancedEngineeringName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "Ingeniería avanzada",
                        "icon": "ui_game_symbol_workbench",
                        "description": "Elementos de ingeniería avanzada como bancos de trabajo, artículos eléctricos y trampas, y trabaja un 20 % más rápido en los bancos de trabajo.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel Intelectual 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel Intelectual 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel Intelectual 8",
                                "required_level": 8
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Herrero",
                                "long_description": "Ahora eres herrero y puedes forjar hierro y otros objetos metálicos. Fabrica fraguas y fabrica objetos con ellas un 20 % más rápido. Fabrica pegamento más barato.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Manitas",
                                "long_description": "Tus habilidades como manitas están resultando útiles en el apocalipsis. Fabrica bancos de trabajo y hormigoneras de cemento, y crea objetos con ellos un 20 % más rápido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Electricista",
                                "long_description": "Ahora eres electricista. Aprende a fabricar generadores y a construir sistemas avanzados de defensa de base, como cercas eléctricas y trampas de cuchillas. Fabrica fibra militar. Gana un 20 % de EXP con las muertes de las trampas eléctricas.\\nArtesano eficiente. Todas las recetas de fragua cuestan un 10 % menos, la elaboración de acero forjado y los dispositivos eléctricos cuestan un 15 % menos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Inventor",
                                "long_description": "Aprende a fabricar torretas de escopeta para defensa de base concentrada de corto alcance, bancos de baterías y pistolas de clavos. Obtén un 35 % de EXP de las muertes por trampas eléctricas.\\nTodas las recetas de fragua cuestan un 15 % menos, la elaboración de acero forjado y los dispositivos eléctricos cuestan un 25 % menos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ingeniero avanzado",
                                "long_description": "Aprende a construir torretas automáticas con metralleta para la mejor defensa de la base a distancia, y crisoles para forjar acero en las fraguas. Obtén un 50 % de EXP de las muertes por trampas eléctricas.\\nTodas las recetas de fragua cuestan un 20 % menos, la elaboración de acero forjado y los dispositivos eléctricos cuestan un 35 % menos.",
                                "cost": 1
                            }
                        }
                    },
                    "perkGreaseMonkey": {
                        "name_key": "perkGreaseMonkeyName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "Mono grasiento",
                        "icon": "ui_game_symbol_service",
                        "description": "¡Aprende a construir vehículos a partir de chatarra en el páramo!\\n\\nLos vehículos se pueden montar a partir de piezas sin esta ventaja.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel Intelectual 2",
                                "required_level": 2
                            },
                            "2": {
                                "description": "Nivel Intelectual 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel Intelectual 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel Intelectual 8",
                                "required_level": 8
                            },
                            "5": {
                                "description": "Nivel Intelectual 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Mecánico de bicicletas",
                                "long_description": "Tu pasión por jugar y no caminar a todas partes te ha llevado por el camino de la mecánica de bicicletas. Puedes fabricar piezas de bicicleta. Ruedas artesanales y piezas de bicicleta un 33 % más baratas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Maestro de la minimoto",
                                "long_description": "¿Por qué pedalear a todas partes cuando hay suficiente chatarra para hacer una minimoto? Puedes fabricar piezas de minimoto, bidones de gas y baterías de coche de calidad 2. Fabrica piezas de minimoto un 33 % más baratas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Maniático de la motocicleta",
                                "long_description": "Era solo cuestión de tiempo antes de que ir más rápido y llevar más equipo se convirtiese en una necesidad. Puedes fabricar piezas de motocicleta, bidones de gas y baterías de coche de calidad 3. Fabrica piezas de motocicleta un 33 % más baratas.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Mono grasiento",
                                "long_description": "Nada es mejor que la seguridad y la calidez de una bonita camioneta 4x4. Puedes fabricar piezas de camionetas 4x4, bidones de gas y baterías de coche de calidad 4. Fabrica piezas de camionetas 4x4 un 33 % más baratas.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Asistente de aviónica",
                                "long_description": "Tu necesidad de ser manitas nunca se satisface y solo un verdadero genio podría descubrir cómo llegar a los cielos con chatarra de hierro. Puedes fabricar piezas de giroscopios y baterías de coche de calidad 5. Fabrica piezas de giroscopios un 33 % más baratas.",
                                "cost": 1
                            }
                        }
                    }
                }
            }
        }
    }
}