data = {
    "attPerception": {
        "name_key": "attPerceptionName",
        "name": "Atributo: Percepci\u00f3n",
        "icon": "ui_game_symbol_stealth",
        "description": "La percepci\u00f3n es la medida de tu conciencia sensorial. El aumento de la percepci\u00f3n aumenta el bono de tiro a la cabeza y la posibilidad de desmembramiento con lanzas, rifles, armas explosivas y herramientas.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Ignorante",
                "long_description": "Eres bastante inconsciente en cuanto a percepci\u00f3n. Inflige un 200\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 5\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "2": {
                "short_description": "Desconocido",
                "long_description": "A\u00fan no eres consciente de la mayor\u00eda de las cosas que te rodean. Inflige un 210\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 10\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "3": {
                "short_description": "Inobservante",
                "long_description": "A veces eres inobservante, pero est\u00e1s mejorando. Inflige un 220\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 15\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "4": {
                "short_description": "Inconsciente",
                "long_description": "Tu percepci\u00f3n inconsciente suele ser solo un peque\u00f1o contratiempo. Inflige un 230\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 20\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "5": {
                "short_description": "Observador",
                "long_description": "Eres observador y te das cuenta de lo suficiente para marcar una gran diferencia. Inflige un 240\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 25\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 1
            },
            "6": {
                "short_description": "Atento",
                "long_description": "Tu atenci\u00f3n a los detalles te est\u00e1 ayudando claramente en el combate. Inflige un 250\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 30\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "7": {
                "short_description": "Discernimiento",
                "long_description": "Ahora puedes discernir los puntos d\u00e9biles de los enemigos con facilidad. Inflige un 260\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 35\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "8": {
                "short_description": "Perceptivo",
                "long_description": "Tu percepci\u00f3n es asombrosa. Inflige un 270\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 40\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 2
            },
            "9": {
                "short_description": "Conciencia Astuta",
                "long_description": "Tu conciencia es astuta. Inflige un 285\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 45\u00a0% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 3
            },
            "10": {
                "short_description": "Tiro en la cabeza explosivo",
                "long_description": "Si se trata de hacer explotar cabezas, no tienes rival. Inflige un 300\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 50% de posibilidades de desmembrar con rifles, explosivos, lanzas y herramientas regidas por Operaciones de salvamento.",
                "cost": 3
            }
        },
        "skills": [
            {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": [
                    {
                        "name_key": "perkDeadEyeName",
                        "parent": "skillPerceptionCombat",
                        "name": "Ojo muerto",
                        "icon": "ui_game_symbol_map_cursor",
                        "description": "Especial\u00edzate en apuntar con los rifles y destrozar a tu objetivo con una bala manejada por expertos. Un disparo, una muerte.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepci\u00f3n 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tiro a la olla",
                                "long_description": "Tiro a la olla. Puedes golpear el lado ancho de un granero y hacer un 10 % m\u00e1s de da\u00f1o con rifles. Crea 2 rifles de calidad deficiente, apunta y recarga un 10 % m\u00e1s r\u00e1pido. Desbloquea la fabricaci\u00f3n de rifles de caza.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Fusilero",
                                "long_description": "Eres un fusilero y puedes alcanzar una roca grande a 30 yardas. Crea rifles de caza de calidad 3 justa. Inflige un 20 % m\u00e1s de da\u00f1o, apunta un 20 % m\u00e1s r\u00e1pido, recarga un 15 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Tirador",
                                "long_description": "Ahora eres un tirador y sabes resistir. Crea rifles de calidad 4 buena. Inflige un 30 % m\u00e1s de da\u00f1o, apunta un 32 % m\u00e1s r\u00e1pido, recarga un 20 % m\u00e1s r\u00e1pido y utiliza un 10% menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificaci\u00f3n por da\u00f1o un 10 %, 20 % hasta un m\u00e1ximo de 30 %.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Francotirador",
                                "long_description": "Ahora eres un francotirador. Crea 5 rifles de calidad 5 genial. Inflige un 40 % m\u00e1s de da\u00f1o, apunta un 45 % m\u00e1s r\u00e1pido, recarga un 25 % m\u00e1s r\u00e1pido y utiliza un 20 % menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificaci\u00f3n por da\u00f1o un 20 %, 30 % hasta un m\u00e1ximo de 40 %.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ojo muerto",
                                "long_description": "Ojo Muerto: A trav\u00e9s de todo el duro entrenamiento y los innumerables disparos, ahora eres un francotirador a ojo muerto. Inflige un 50 % m\u00e1s de da\u00f1o, apunta un 60 % m\u00e1s r\u00e1pido, recarga un 30 % m\u00e1s r\u00e1pido y utiliza un 30 % menos de resistencia al apuntar con rifles.\\nRacha de muertes: Las muertes sucesivas aumentan la bonificaci\u00f3n por da\u00f1os en un 30 %, 40 % hasta un m\u00e1ximo de 50 %.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkDemolitionsExpertName",
                        "parent": "skillPerceptionCombat",
                        "name": "Experto en demoliciones",
                        "icon": "ui_game_symbol_explosion",
                        "description": "Especial\u00edzate en armas explosivas para aturdir, lisiar y desmembrar a tus enemigos.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepci\u00f3n 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Granadero iniciado",
                                "long_description": "Ahora eres un iniciado granadero, ten cuidado con esos explosivos. Aumenta el da\u00f1o en un 10\u00a0%, la velocidad de recarga en un 15\u00a0%, apunta un 10\u00a0% m\u00e1s r\u00e1pido, obtienes 50\u00a0% m\u00e1s de posibilidades de aturdir a los enemigos y 5\u00a0% m\u00e1s de posibilidades de desmembrar.\\nFabrica bombas de tubo, minas de placa de presi\u00f3n y minas de ollas de cocina.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "\"I'm TNT, I'm dynamite.\" ",
                                "long_description": "Aumenta el da\u00f1o en un 20\u00a0%, la velocidad de recarga en un 20\u00a0%, apunta un 20\u00a0% m\u00e1s r\u00e1pido, obtienes 100\u00a0% m\u00e1s de posibilidades de aturdir a los enemigos y 10\u00a0% m\u00e1s de posibilidades de desmembrar.\\nFabrica dinamita y mina terrestre hecha con tapacubos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Manipulador de explosivos",
                                "long_description": "Ahora eres un manipulador de explosivos. Aumenta el da\u00f1o en un 30\u00a0%, la velocidad de recarga en un 25\u00a0%, apunta un 30\u00a0% m\u00e1s r\u00e1pido, obtienes 33\u00a0% m\u00e1s de posibilidades de paralizar a los enemigos y 20\u00a0% m\u00e1s de posibilidades de desmembrar.\\nFabrica granadas y pilas m\u00e1s eficientes de p\u00f3lvora.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Hombre cohete",
                                "long_description": "Ahora eres un hombre cohete. Aumenta el da\u00f1o en un 40\u00a0%, la velocidad de recarga en un 30\u00a0%, apunta un 40\u00a0% m\u00e1s r\u00e1pido, obtienes 66\u00a0% m\u00e1s de posibilidades de paralizar a los enemigos y 30\u00a0% m\u00e1s de posibilidades de desmembrar.\\nFabrica cohetes altamente explosivos y cohetes antipersonales de fragmentaci\u00f3n.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Experto en demoliciones",
                                "long_description": "Experto en demoliciones. Haces que las cosas exploten a lo grande. Aumenta el da\u00f1o en un 50\u00a0%, la velocidad de recarga en un 35\u00a0%, apunta un 50\u00a0% m\u00e1s r\u00e1pido, y obtienes un 45\u00a0% m\u00e1s de posibilidades de desmembrar.\\nFabrica cargas temporizadas, granadas de contacto y minas terrestres hechas con filtros de aire.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkJavelinMasterName",
                        "parent": "skillPerceptionCombat",
                        "name": "Maestro de la jabalina",
                        "icon": "ui_game_symbol_spear",
                        "description": "Aprende a infligir m\u00e1s da\u00f1o y a lanzar lanzas m\u00e1s lejos y con m\u00e1s precisi\u00f3n.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 3",
                                "required_level": 3
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 5",
                                "required_level": 5
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            },
                            "5": {
                                "description": "Nivel de percepci\u00f3n 10",
                                "required_level": 10
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Palos afilados",
                                "long_description": "Los palos y las piedras no pueden romperme los huesos, pero si se combinan forman una bonita lanza. Crea lanzas de calidad 2 deficiente. Las lanzas causan un 10 % m\u00e1s de da\u00f1o y tienen un 10 % m\u00e1s de alcance cuando son lanzadas.\\nDesbloquea la fabricaci\u00f3n de lanzas de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Lanzador de lanzas",
                                "long_description": "Crea lanzas de calidad 3 justa. Las lanzas ahora infligen un 20 % m\u00e1s de da\u00f1o y tienen un 20% m\u00e1s de alcance cuando son lanzadas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Lancero",
                                "long_description": "Ahora eres un Lancero y puedes hacer lanzas de calidad 4 buenas. Las lanzas infligen un 30 % m\u00e1s de da\u00f1o y tienen un 30 % m\u00e1s de alcance cuando son lanzadas.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Lanzador",
                                "long_description": "Ahora eres un lanzador y puedes crear lanzas de calidad 5 genial. Las lanzas infligen ahora un 40 % m\u00e1s de da\u00f1o y tienen un 40 % m\u00e1s de alcance.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Maestro de la jabalina",
                                "long_description": "Ahora eres un maestro de jabalina y, si esto no fuera el apocalipsis, podr\u00edas estar en los Juegos Ol\u00edmpicos. Las lanzas causan un 50 % m\u00e1s de da\u00f1o y tienen un 50 % m\u00e1s de alcance.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillPerceptionGeneralName",
                "name": "Beneficios de percepci\u00f3n general",
                "icon": "ui_game_symbol_stealth",
                "perks": [
                    {
                        "name_key": "perkLockPickingName",
                        "parent": "skillPerceptionGeneral",
                        "name": "Apertura de cerraduras",
                        "icon": "ui_game_symbol_unlock",
                        "description": "Aprende a forzar las ganz\u00faas m\u00e1s r\u00e1pido y a romper menos ganz\u00faas.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Saqueador",
                                "long_description": "Saqueador. Est\u00e1s empezando a hacerte un nombre. Puedes forzar cerraduras un 20 % m\u00e1s r\u00e1pido y tener un 10 % menos de posibilidades de romper las ganz\u00faas. Fabrica ganz\u00faas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cerrajero",
                                "long_description": "Ahora eres un herrero de cerraduras y pocas cerraduras te mantendr\u00e1n fuera. Puedes forzar cerraduras un 40 % m\u00e1s r\u00e1pido y tener un 20 % menos de posibilidades de romper las ganz\u00faas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Quebrantador de cajas de seguridad",
                                "long_description": "Ahora eres un quebrantador de cajas de seguridad de clase mundial. Puedes forzar cerraduras un 60 % m\u00e1s r\u00e1pido y tener un 30 % menos de posibilidades de romper las ganz\u00faas.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkInfiltratorName",
                        "parent": "skillPerceptionGeneral",
                        "name": "El infiltrador",
                        "icon": "ui_game_symbol_stealth",
                        "description": "Usa tus sentidos aumentados para recibir menos da\u00f1o por las trampas.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Topo",
                                "long_description": "Ahora eres un topo y puedes moverte por trampas peligrosas m\u00e1s f\u00e1cilmente. Las trampas de tablas sueltas y las minas terrestres se activan medio segundo m\u00e1s despacio. Recibe un 20\u00a0% menos de da\u00f1o de las minas terrestres.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Intruso",
                                "long_description": "Ahora eres un intruso y te mueves con confianza a trav\u00e9s de lugares peligrosos. Las trampas de tablas sueltas y las minas terrestres se activan 1 segundo m\u00e1s despacio. Recibe un 35\u00a0% menos de da\u00f1o de las minas terrestres.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "El infiltrador",
                                "long_description": "Eres conocido como El Infiltrador, ya que puedes infiltrarte con seguridad por los campos minados m\u00e1s peligrosos. Las trampas de tablas sueltas y las minas terrestres se activan 2 segundos m\u00e1s despacio. Recibe un 50\u00a0% menos de da\u00f1o de las minas terrestres. Puedes recoger minas terrestres.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkAnimalTrackerName",
                        "parent": "skillPerceptionGeneral",
                        "name": "Rastreador de animales",
                        "icon": "ui_game_symbol_animal_tracker",
                        "description": "Aprende a detectar y rastrear animales a menos de 100 metros y nunca pases hambre.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Rastreador de senderos",
                                "long_description": "Ag\u00e1chate y usa tu aguda vista para encontrar las huellas de peque\u00f1os animales como conejos, serpientes o gallinas.\\nLos animales rastreados est\u00e1n marcados en tu br\u00fajula y mapa.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cazador",
                                "long_description": "Tus sentidos comparables a los del halc\u00f3n pueden detectar depredadores sigilosos como lobos o coyotes.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Sabueso de caza mayor",
                                "long_description": "Convi\u00e9rtete en el mejor rastreador. Tus sentidos son incomparables. Puedes detectar depredadores como osos o pumas.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkPenetratorName",
                        "parent": "skillPerceptionGeneral",
                        "name": "El penetrador",
                        "icon": "ui_game_symbol_paint_copy_block",
                        "description": "Encuentras puntos d\u00e9biles en la armadura de un objetivo y puedes usar balas de rifle AP para disparar a trav\u00e9s de m\u00faltiples objetivos org\u00e1nicos.",
                        "max_level": 4,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 6",
                                "required_level": 6
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 8",
                                "required_level": 8
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Tiro perforador",
                                "long_description": "Ignora el 10\u00a0% de la armadura con armas de fuego y arcos o el 20\u00a0% con cualquier objeto de reducci\u00f3n de armadura del objetivo.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Perforador",
                                "long_description": "Ignora el 15\u00a0% de la armadura con armas de fuego y arcos o el 30\u00a0% con cualquier objeto de reducci\u00f3n de armadura del objetivo.\\nLas balas perforadoras pueden atravesar un objetivo adicional o un bloque de hasta 500 puntos de impacto cuando se usan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Agujereador",
                                "long_description": "Ignora el 20\u00a0% de la armadura con armas de fuego y arcos o el 40\u00a0% con cualquier objeto de reducci\u00f3n de armadura del objetivo.\\nLas balas perforadoras pueden atravesar dos objetivos adicionales o un bloque de hasta 750 puntos de impacto cuando se usan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "El penetrador",
                                "long_description": "Ignora el 20\u00a0% de la armadura con armas de fuego y arcos o el 50\u00a0% con cualquier objeto de reducci\u00f3n de armadura del objetivo.\\nLas balas perforadoras de armadura pueden atravesar tres objetivos adicionales o un bloque de hasta 1000 puntos de impacto cuando se utilizan rifles de caza, de tirador o de francotirador.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillPerceptionScavengingName",
                "name": "Beneficios de carro\u00f1ar",
                "icon": "ui_game_symbol_hand",
                "perks": [
                    {
                        "name_key": "perkLuckyLooterName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Saqueador con suerte",
                        "icon": "ui_game_symbol_shopping_cart",
                        "description": "Especial\u00edzate en la b\u00fasqueda de la veta madre y tal vez obtendr\u00e1s un poco m\u00e1s por tus molestias.\\nEncontrar\u00e1s un bot\u00edn mejor con cada nivel de beneficio.",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Pocas posibilidades",
                                "long_description": "Tienes una peque\u00f1a oportunidad de encontrar un bot\u00edn mejor. Suma 5% a la bonificaci\u00f3n de bot\u00edn para los contenedores que abras personalmente. El saqueo es un 10\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Afortunado",
                                "long_description": "Tu suerte est\u00e1 mejorando y mires donde mires siempre encuentras algo bueno. Suma 10% a la bonificaci\u00f3n por bot\u00edn. El saqueo es un 20\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Buena fortuna",
                                "long_description": "Suma 15% a la bonificaci\u00f3n por bot\u00edn. El saqueo es un 40\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Bendecido",
                                "long_description": "Parece que has sido bendecido con encontrar un gran bot\u00edn por dondequiera que mires. Suma 20% a la bonificaci\u00f3n por bot\u00edn. El saqueo es un 60\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Saqueador con suerte",
                                "long_description": "El saqueador con suerte. Est\u00e1s en una racha y los dados est\u00e1n cargados. Suma 25% a la bonificaci\u00f3n por bot\u00edn. El saqueo es un 80\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkTreasureHunterName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Cazador de tesoro",
                        "icon": "ui_game_symbol_treasure",
                        "description": "Convi\u00e9rtete en uno de los mejores cazadores de tesoros de todos los tiempos aprendiendo trucos que incluso causar\u00edan la envidia de Barbanegra.",
                        "max_level": 3,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 4",
                                "required_level": 4
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Saqueador",
                                "long_description": "Por cada 7 bloques cavados, el radio de b\u00fasqueda del tesoro se reduce 1\u00a0m. Sin el beneficio, tendr\u00e1s que cavar 10 bloques.\\nEncuentra un 10\u00a0% m\u00e1s de objetos en el tesoro enterrado.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Merodeador",
                                "long_description": "Por cada 5 bloques cavados, el radio de b\u00fasqueda del tesoro se reduce 1\u00a0m.\\nEncuentra un 20\u00a0% m\u00e1s de objetos en el tesoro enterrado.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cazador de tesoro",
                                "long_description": "Por cada 3 bloques cavados, el radio de b\u00fasqueda del tesoro se reduce 1\u00a0m.\\nEncuentra un 30\u00a0% m\u00e1s de objetos en el tesoro enterrado.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkSalvageOperationsName",
                        "parent": "skillPerceptionScavenging",
                        "name": "Operaciones de salvamento",
                        "icon": "ui_game_symbol_scrap",
                        "description": "\u00a1No malgastes, no quieras! Recicla art\u00edculos con llave inglesa, trinquete o atornillador de impacto para obtener m\u00e1s recursos",
                        "max_level": 5,
                        "requirements": {
                            "1": {
                                "description": "Nivel de percepci\u00f3n 1",
                                "required_level": 1
                            },
                            "2": {
                                "description": "Nivel de percepci\u00f3n 2",
                                "required_level": 2
                            },
                            "3": {
                                "description": "Nivel de percepci\u00f3n 3",
                                "required_level": 3
                            },
                            "4": {
                                "description": "Nivel de percepci\u00f3n 5",
                                "required_level": 5
                            },
                            "5": {
                                "description": "Nivel de percepci\u00f3n 7",
                                "required_level": 7
                            }
                        },
                        "levels": {
                            "1": {
                                "short_description": "Coleccionista de chatarra",
                                "long_description": "\u00bfQui\u00e9n sabe qu\u00e9 cosas \u00fatiles se pueden encontrar al desarmar las cosas? Fabrica herramientas de rescate de calidad 2 pobre. Inflige un 10\u00a0% m\u00e1s de da\u00f1o, apunta un 20\u00a0% m\u00e1s r\u00e1pido y obtiene un 20\u00a0% m\u00e1s de recursos con llave inglesa, trinquete o atornillador de impacto.\\nDesbloquea fabricaci\u00f3n de llave inglesa.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Carro\u00f1ero",
                                "long_description": "La mayor\u00eda de la gente te llama carro\u00f1ero, pero por lo menos es una vida honesta. Fabrica herramientas de rescate de calidad 3 justa. Inflige un 20\u00a0% m\u00e1s de da\u00f1o, apunta un 40\u00a0% m\u00e1s r\u00e1pido y obtiene un 40\u00a0% m\u00e1s recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Recuperador",
                                "long_description": "Parece que tienes un don para recuperar piezas m\u00e1s \u00fatiles que el carro\u00f1ero promedio. Fabrica herramientas de rescate de calidad 4 buena. Inflige un 30\u00a0% m\u00e1s de da\u00f1o, apunta un 60\u00a0% m\u00e1s r\u00e1pido y obtiene un 60\u00a0% m\u00e1s recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Coleccionista de piezas",
                                "long_description": "Tu capacidad para reunir piezas recuperadas es notable. Fabrica herramientas de rescate de calidad 5 genial. Inflige un 40\u00a0% m\u00e1s de da\u00f1o, apunta un 80\u00a0% m\u00e1s r\u00e1pido y obtiene un 80\u00a0% m\u00e1s recursos con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Maestro carro\u00f1ero",
                                "long_description": "Eres el rey de los traficantes de chatarra y la envidia de los monos grasientos del Apocalipsis. Inflige un 50\u00a0% m\u00e1s de da\u00f1o, apunta un 100\u00a0% m\u00e1s r\u00e1pido y obtiene un 100\u00a0% m\u00e1s recursos con herramientas de rescate como llaves. con llave inglesa, trinquete o atornillador de impacto.",
                                "cost": 1
                            }
                        }
                    }
                ]
            }
        ]
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
                "long_description": "Todo el mundo quiere ser un culturista pero nadie quiere levantar esas pesadas pesas. Inflige un 200\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 5\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "2": {
                "short_description": "Descarnado",
                "long_description": "Puede que seas flaco, pero tienes un fuego dentro que te hace grande y fuerte. Inflige un 210\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 10\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "3": {
                "short_description": "Bebedor de leche",
                "long_description": "\u00bfQu\u00e9 hace un bebedor de leche como t\u00fa en el apocalipsis zombi? Inflige un 220\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 15\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "4": {
                "short_description": "Suav\u00f3n",
                "long_description": "Tu llanta de repuesto puede evitar que mueras de hambre, pero no te ayuda a balancear un mazo. Inflige un 230\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 20\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "5": {
                "short_description": "En forma",
                "long_description": "Est\u00e1s en forma y eres capaz de infligir un 240\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 25\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 1
            },
            "6": {
                "short_description": "Fuerte",
                "long_description": "Eres muy fuerte y todos los normalitos del gimnasio te envidian. Inflige un 250\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 30\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "7": {
                "short_description": "Culturista",
                "long_description": "Las sesiones de pesas con palos y las mazas te ha dado frutos, hermano. Inflige un 260\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 35\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "8": {
                "short_description": "Levantador de peso",
                "long_description": "Tu enorme fuerza es legendaria. Inflige un 270\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 40\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 2
            },
            "9": {
                "short_description": "Modo Bestia",
                "long_description": "El tama\u00f1o, la fuerza y la potencia est\u00e1n todos a nivel campe\u00f3n ahora. Inflige un 285\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 45\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 3
            },
            "10": {
                "short_description": "Campe\u00f3n ol\u00edmpico",
                "long_description": "Podr\u00edas haber sido un campe\u00f3n ol\u00edmpico si el apocalipsis no hubiera arruinado ese sue\u00f1o. Ahora simplemente aplastas zombis. Inflige un 300\u00a0% de da\u00f1o por tiro a la cabeza y tienes un 50\u00a0% m\u00e1s de posibilidades de desmembrar con escopetas, palos, mazos y herramientas regidas por Minero del 69.",
                "cost": 3
            }
        },
        "skills": [
            {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": [
                    {
                        "name_key": "perkBoomstickName",
                        "parent": "skillStrengthCombat",
                        "name": "Palo explosivo",
                        "icon": "ui_game_symbol_shotgun",
                        "description": "Especial\u00edzate en escopetas y env\u00eda a tus enemigos a conocer a su creador. Haz m\u00e1s da\u00f1o, secciona miembros, dispara y recarga m\u00e1s r\u00e1pido.",
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
                                "long_description": "Tal vez tu punter\u00eda no sea muy buena, o simplemente te gusta hacer mucho da\u00f1o de cerca y personalmente. De cualquier modo, un vagabundo con una escopeta no debe ser molestado. 2 escopetas de calidad artesanal, infligen un 10 % m\u00e1s de da\u00f1o, un 10 % m\u00e1s de velocidad de disparo y la recarga es un 10 % m\u00e1s r\u00e1pida. Aturde a los enemigos durante 6 segundos.\\nAumenta las posibilidades de desmembramiento en un 5 %.\\nDesbloquea la creaci\u00f3n de la escopeta de doble ca\u00f1\u00f3n.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "N\u00f3mada de escopeta",
                                "long_description": "Deambular por los p\u00e1ramos como un n\u00f3mada ha mejorado tus habilidades con escopetas. 3 escopetas de calidad justa, infligen un 20 % m\u00e1s de da\u00f1o, un 20 % m\u00e1s de velocidad de disparo y la recarga es un 15 % m\u00e1s r\u00e1pida.\\nAumenta la probabilidad de desmembrar un 10 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Profesional de la escopeta",
                                "long_description": "Si los encuentros con escopeta siguieran estando de moda, acabar\u00edas con todos esos patos de arcilla y ser\u00edas considerado un profesional de la escopeta. 4 escopetas de calidad buena, infligen un 30 % m\u00e1s de da\u00f1o, un 30% m\u00e1s de velocidad de disparo y la recarga es un 20 % m\u00e1s r\u00e1pida. Aturde a los enemigos durante 8 segundos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Maestro de la escopeta",
                                "long_description": "Ahora eres mortal con una escopeta y eres considerado un maestro de la escopeta. 5 escopetas de calidad genial, inflige un 40 % m\u00e1s de da\u00f1o, un 40 % m\u00e1s de velocidad de disparo y la recarga es un 25 % m\u00e1s r\u00e1pida.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Palo explosivo",
                                "long_description": "Has ascendido al legendario estado de Mes\u00edas Escopetero, ya que eres lo \u00faltimo que ven antes de conocer a su creador. Inflige un 50 % m\u00e1s de da\u00f1o, un 50 % m\u00e1s de velocidad de disparo y un la recarga es un 30 % m\u00e1s r\u00e1pida.\\nLos disparos en las piernas paralizan a los oponentes.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkPummelPeteName",
                        "parent": "skillStrengthCombat",
                        "name": "Pete apalea",
                        "icon": "ui_game_symbol_stunned",
                        "description": "Especial\u00edzate en dejar a tus enemigos sin sentido con palos y porras.",
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
                                "long_description": "Puede que no sepas dar un pu\u00f1etazo, pero como currela, \u00a1sabes atizar con un palo! Fabrica palos de calidad 2 deficiente, inflige un 10\u00a0% m\u00e1s de da\u00f1o y los ataques infligen un 40\u00a0% m\u00e1s de da\u00f1o a los enemigos aturdidos. Los ataques poderosos tienen un 60\u00a0% de posibilidades de derribar nuevamente a los enemigos.\\nDesbloquea la fabricaci\u00f3n de bates de b\u00e9isbol.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Mat\u00f3n",
                                "long_description": "Te est\u00e1s haciendo un nombre como peligroso mat\u00f3n. Fabrica palos de calidad 3 justa, inflige un 20\u00a0% m\u00e1s de da\u00f1o, los ataques infligen un 80\u00a0% m\u00e1s de da\u00f1o a los enemigos aturdidos y los ataques poderosos tienen un 70\u00a0% de posibilidades de derribar nuevamente a los enemigos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Grandes Ligas",
                                "long_description": "Has luchado lo suficiente como para estar en las grandes ligas. Fabrica palos de calidad 4 buena, inflige un 30\u00a0% m\u00e1s de da\u00f1o, los ataques infligen un 120\u00a0% m\u00e1s de da\u00f1o a los enemigos aturdidos y los ataques poderosos tienen un 80\u00a0% de posibilidades de derribar nuevamente a los enemigos.\\nAcertar 5 impactos seguidos en poco tiempo hacen que el \u00faltimo golpe provoque un 100\u00a0% de da\u00f1o extra.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Qu\u00e9date ah\u00ed abajo",
                                "long_description": "Cuando dijiste que se quedara abajo, lo dec\u00edas en serio. Fabrica palos de calidad 5 genial, inflige un 40\u00a0% m\u00e1s de da\u00f1o, los ataques infligen un 160\u00a0% m\u00e1s de da\u00f1o a los enemigos aturdidos y los ataques poderosos tienen un 90\u00a0% de posibilidades de derribar nuevamente a los enemigos.\\n4 golpes sucesivos en poco tiempo causan que el \u00faltimo golpe provoque un da\u00f1o extra del 100 %.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Pete apalea",
                                "long_description": "Pete apalea una vez se enfrent\u00f3 a 50 zombis con solo un palo, y estar\u00eda orgulloso de ti. Inflige un 50\u00a0% m\u00e1s de da\u00f1o, los ataques causan un 200\u00a0% m\u00e1s de da\u00f1o a los enemigos aturdidos y los ataques poderosos tienen un 100\u00a0% de posibilidades de derribar nuevamente a los enemigos.\\n3 golpes sucesivos en poco tiempo hacen que el \u00faltimo golpe provoque un da\u00f1o extra del 100 %.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkSkullCrusherName",
                        "parent": "skillStrengthCombat",
                        "name": "Triturador de cr\u00e1neo",
                        "icon": "ui_game_symbol_sledge",
                        "description": "Especial\u00edzate en destruir enemigos con armas y estructuras como mazos.",
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
                                "long_description": "Eres un amoratador y con un poco de suerte a veces puedes derribar a los zombis geri\u00e1tricos. Fabrica mazos de calidad 2 deficiente e inflige un 10\u00a0% m\u00e1s de da\u00f1o. Tienes un 15\u00a0% de posibilidades de derribar enemigos con ataques poderosos.\\nDesbloquea la fabricaci\u00f3n de mazos de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Demoledor",
                                "long_description": "Ya eres un demoledor, pero no te lo creas demasiado todav\u00eda. Fabrica mazos de calidad 3 justa e inflige un 20\u00a0% m\u00e1s de da\u00f1o. Tienes un 30\u00a0% de posibilidades de derribar enemigos con ataques poderosos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Triturador",
                                "long_description": "Eres un triturador certificado de la mayor\u00eda de las cosas que se interponen en tu camino. Fabrica mazos de calidad 4 buena e inflige un 30\u00a0% m\u00e1s de da\u00f1o. Los ataques poderosos tienen un 45\u00a0% de posibilidades de derribar enemigos y un 20\u00a0% de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Rompehuesos",
                                "long_description": "Casi has perfeccionado el arte de romper cosas y huesos. Fabrica mazos de calidad 5 genial e inflige un 40\u00a0% m\u00e1s de da\u00f1o. Los ataques poderosos tienen un 60\u00a0% de posibilidades de derribar enemigos y un 35\u00a0% de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Triturador de cr\u00e1neo",
                                "long_description": "Triturador de cr\u00e1neo. Si alguien te molesta, tienes los medios para aplastarle el cr\u00e1neo. Inflige un 50\u00a0% m\u00e1s de da\u00f1o. Los ataques poderosos tienen un 75\u00a0% de posibilidades de derribar enemigos, y un 50\u00a0% de posibilidades de derribar enemigos cercanos.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillStrengthGeneralName",
                "name": "Beneficios generales de fuerza",
                "icon": "ui_game_symbol_muscle",
                "perks": [
                    {
                        "name_key": "perkSexualTrexName",
                        "parent": "skillStrengthGeneral",
                        "name": "Tiranosaurio sexual",
                        "icon": "ui_game_symbol_trex",
                        "description": "Especial\u00edzate en desencadenar un implacable asalto de golpes que garantiza dejar a tu presa boquiabierta ante tu inquebrantable resistencia.",
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
                                "long_description": "Nadie le faltar\u00e1 el respeto a un guerrero. Reduce en un 20 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 40 % los ataques de potencia.\\nLos golpes mortales conceden 20 de resistencia.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Gladiador de jaula",
                                "long_description": "Ahora eres un gladiador de jaula y has alcanzado la mayor destreza atl\u00e9tica posible. Reduce en un 25 % el uso del cuerpo a cuerpo y de las herramientas de resistencia y en un 50 % los ataques de potencia.\\nLos golpes mortales conceden 30 de resistencia.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkHeavyArmorName",
                        "parent": "skillStrengthGeneral",
                        "name": "Armadura pesadas",
                        "icon": "ui_game_symbol_armor_iron",
                        "description": "Especial\u00edzate en protegerte con hierro y acero, convirti\u00e9ndote en un gigante imparable en el campo de batalla.",
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
                                "long_description": "Puede que moverte sea un poco inc\u00f3modo con una armadura pesada, pero has sobrevivido para contarlo. Crea armaduras pesadas de calidad 2 deficiente, reduce el movimiento de la armadura pesada y la penalizaci\u00f3n de resistencia en un 5 %. Mejora la durabilidad en un 50 %.\\nDesbloquea la elaboraci\u00f3n de armadura de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Metal pesado",
                                "long_description": "\u00a1Ciertamente sabes recibir un golpe! Crea armaduras pesadas de calidad 3 justa, reduce la penalizaci\u00f3n por movimiento de armadura pesada y la penalizaci\u00f3n de resistencia en un 10\u00a0%. Mejora la durabilidad en un 100\u00a0%.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Hombre de hierro",
                                "long_description": "Ahora s\u00ed que estamos hablando de una protecci\u00f3n seria. Crea armaduras pesadas de calidad 4 buena, reduce la penalizaci\u00f3n por movimiento de armadura pesada y la penalizaci\u00f3n de resistencia en un 17\u00a0%. Mejora la durabilidad en un 150\u00a0%.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Entra en el tanque",
                                "long_description": "Ahora eres un tanque ambulante. Crea armaduras pesadas de calidad 5 genial, reduce la penalizaci\u00f3n por movimiento de armadura pesada y la penalizaci\u00f3n de resistencia en un 25\u00a0%. Mejora la durabilidad en un 200\u00a0%.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkPackMuleName",
                        "parent": "skillStrengthGeneral",
                        "name": "Mula de carga",
                        "icon": "ui_game_symbol_pack_mule",
                        "description": "Eres una mula de carga y puedes llevar m\u00e1s art\u00edculos en tu inventario sin sufrir penalizaciones de movimiento.",
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
                                "long_description": "\u00bfQui\u00e9n tiene tiempo para organizar sus cosas perfectamente? Lleva tres art\u00edculos m\u00e1s sin desbordarte.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Se\u00f1ora de la bolsa",
                                "long_description": "Sabes que est\u00e1 en alguna parte. Lleva otros tres art\u00edculos m\u00e1s sin desbordarte.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Ordenado y organizado",
                                "long_description": "Sabes exactamente d\u00f3nde est\u00e1 todo. Lleve cuatro art\u00edculos adicionales sin ser gravados.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "En forma de barco",
                                "long_description": "Acabas de pasar la inspecci\u00f3n en privado.  Lleva cuatro art\u00edculos m\u00e1s sin desbordarte.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Mula de carga",
                                "long_description": "Ahora solo est\u00e1s presumiendo, eres parte mula o un hombre fuerte. Lleva cuatro art\u00edculos m\u00e1s sin desbordarte.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkMasterChefName",
                        "parent": "skillStrengthGeneral",
                        "name": "Master Chef",
                        "icon": "ui_game_symbol_spatula",
                        "description": "Crea comidas m\u00e1s completas con beneficios avanzados y aprende a cocinar m\u00e1s r\u00e1pido.",
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
                                "long_description": "Cocinar no es lo tuyo, pero ya sabes lo b\u00e1sico. Desbloquea recetas b\u00e1sicas como tocino y huevos, carnes hervidas y a la parrilla, patatas al horno, pan de ma\u00edz, t\u00e9 y caf\u00e9. Cocina un 10 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Abuela",
                                "long_description": "Igual que como las hac\u00eda la abuela, sabrosas y abundantes comidas que te llenan durante d\u00edas. Haz filetes con papas, estofado de carne y de vegetales, pastel de ar\u00e1ndanos y varios platos de calabaza. Cocina un 20 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cocinero limitado",
                                "long_description": "Aprende a hacer comidas nutritivas a partir de productos enlatados. Sopa de pescado artesanal, estofado de vagabundos, perritos calientes con chile y tacos de pescado. B\u00e1\u00f1alas con batidos de yuca y cerveza. Cocina un 30 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Cocinero del ej\u00e9rcito",
                                "long_description": "Cocina para un ej\u00e9rcito haciendo estofado de gumbo, pastel de pastores, espaguetis y salsa de at\u00fan en pan tostado. Cocina un 40 % m\u00e1s r\u00e1pido. Usa un 20 % menos de los ingredientes principales de una receta.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Master Chef",
                                "long_description": "Las incre\u00edbles recetas del abuelo. \u00a1Aprende las recetas\\nsecretas de tu abuelo que aumentan las estad\u00edsticas y los atributos! Cocina un 50 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillStrengthConstructionName",
                "name": "Beneficios de construcci\u00f3n",
                "icon": "ui_game_symbol_resource",
                "perks": [
                    {
                        "name_key": "perkMiner69rName",
                        "parent": "skillStrengthConstruction",
                        "name": "Minero del 69",
                        "icon": "ui_game_symbol_mining",
                        "description": "Maximiza tus esfuerzos mineros aumentando el da\u00f1o de las herramientas para derribar rocas y \u00e1rboles m\u00e1s r\u00e1pido.",
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
                                "long_description": "Todo el mundo tiene que empezar en alg\u00fan momento. Crea herramientas de calidad 2 deficiente, aumenta el da\u00f1o de la herramienta en un 10\u00a0% y el da\u00f1o en bloque en un 30\u00a0% con cualquier hacha, pico, pala, motosierras o barrena.\\nDesbloquea todas las armas de hierro como los picos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Johnny Newcome",
                                "long_description": "Todav\u00eda est\u00e1s un poco verde, pero ya no vas a por el caf\u00e9 de los mineros. Crea herramientas de calidad 3 justa, aumenta el da\u00f1o de la herramienta en un 20\u00a0% y el da\u00f1o en bloque en un 60\u00a0% con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Minero",
                                "long_description": "Ahora eres un minero profesional o lo que en su d\u00eda llamaron minero, a secas. Crea herramientas de calidad 4 buena, aumenta el da\u00f1o de la herramienta en un 30\u00a0% y el da\u00f1o en bloque en un 90\u00a0% con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Rompepiedras",
                                "long_description": "Ahora puedes romper roca con los mejores. Crea herramientas de calidad 5 genial, aumenta el da\u00f1o de la herramienta en un 40\u00a0% y el da\u00f1o en bloque en un 120\u00a0% con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Minero del 69",
                                "long_description": "Eres el legendario Minero del 69 y puedes encontrar el centro jugoso de cualquier roca m\u00e1s r\u00e1pido que una rana toro caliente. Aumenta el da\u00f1o en un 50\u00a0% y el da\u00f1o en bloque en un 150\u00a0% con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkMotherLodeName",
                        "parent": "skillStrengthConstruction",
                        "name": "La veta madre",
                        "icon": "ui_game_symbol_mother_load",
                        "description": "Cosecha m\u00e1s recursos y trae a casa la veta madre.",
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
                                "long_description": "Has encontrado tu primera vena peque\u00f1a y eres la envidia de todos los novatos.\\nConsigue un 20\u00a0% m\u00e1s de minerales, piedras, bloques de terreno y \u00e1rboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Vena principal",
                                "long_description": "Encontrar m\u00e1s mineral se est\u00e1 convirtiendo en algo natural para ti. Cosecha un 40\u00a0% m\u00e1s de minerales, piedras, bloques de terreno y \u00e1rboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Has encontrado oro",
                                "long_description": "Has dado un gran paso y probablemente puedas ganarte la vida decentemente con esto. Cosecha un 60\u00a0% m\u00e1s de minerales, piedras, bloques de terreno y \u00e1rboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Mina de Oro",
                                "long_description": "Vas a necesitar un cochecito de beb\u00e9 irland\u00e9s para llevar todo este mineral. Cosecha un 80\u00a0% m\u00e1s de minerales, piedras, bloques de terreno y \u00e1rboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "La veta madre",
                                "long_description": "La miner\u00eda es una segunda naturaleza para ti y encuentras la veta madre dondequiera que vayas. Cosecha un 100\u00a0% m\u00e1s de minerales, piedras, bloques de terreno y \u00e1rboles con cualquier hacha, pico, pala, motosierras o barrena.",
                                "cost": 1
                            }
                        }
                    }
                ]
            }
        ]
    },
    "attFortitude": {
        "name_key": "attFortitudeName",
        "name": "Atributo: Fortaleza",
        "icon": "ui_game_symbol_add",
        "description": "La fortaleza es la medida de tu resistencia f\u00edsica.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Salud fr\u00e1gil",
                "long_description": "No eres muy fiable ni saludable, pero por lo menos est\u00e1s vivo. Inflige un 200 % de da\u00f1o por un disparo en la cabeza y tienes un 5 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 1
            },
            "2": {
                "short_description": "Enfermito",
                "long_description": "Te sientes un poco mejor que antes. Inflige un 210 % de da\u00f1o por un disparo en la cabeza y tienes un 10 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 1
            },
            "3": {
                "short_description": "Insalubre",
                "long_description": "Sigues desafiando la gravedad y sigues en pie. Inflige un 220 % de da\u00f1o por un disparo en la cabeza y tienes un 15 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 1
            },
            "4": {
                "short_description": "Debilitado",
                "long_description": "Empiezas a sentirte como la gente normal. Reparte el 230 % de los da\u00f1os causados por un disparo en la cabeza y tienes un 20 % de posibilidades de desmembrar con los pu\u00f1os y las ametralladoras.",
                "cost": 1
            },
            "5": {
                "short_description": "Robusto",
                "long_description": "Gozas de buena salud. Inflige un 240 % de da\u00f1o por un disparo en la cabeza y tienes un 25 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 1
            },
            "6": {
                "short_description": "Muy saludable",
                "long_description": "Est\u00e1s muy saludable. Inflige un 250 % de da\u00f1o por un disparo en la cabeza y tienes un 30 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 2
            },
            "7": {
                "short_description": "Salud vigorosa",
                "long_description": "Tienes una salud vigorosa. Inflige un 260 % de da\u00f1o por un disparo en la cabeza y tienes un 35 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 2
            },
            "8": {
                "short_description": "Resistente",
                "long_description": "Eres tan resistente como el que m\u00e1s. Inflige un 270 % de da\u00f1o por un disparo en la cabeza y tienes un 40 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 2
            },
            "9": {
                "short_description": "Asombrosa constituci\u00f3n",
                "long_description": "Tienes una constituci\u00f3n incre\u00edble. Inflige un 285 % de da\u00f1o por un disparo en la cabeza y tienes un 45 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 3
            },
            "10": {
                "short_description": "Fortaleza exuberante",
                "long_description": "Tienes una fortaleza exuberante y puedes darle una paliza a un tornado. Inflige un 300 % de da\u00f1o por un disparo en la cabeza y tienes un 50 % de posibilidades de desmembrar con pu\u00f1os y ametralladoras.",
                "cost": 3
            }
        },
        "skills": [
            {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": [
                    {
                        "name_key": "perkBrawlerName",
                        "parent": "skillFortitudeCombat",
                        "name": "El alborotador",
                        "icon": "ui_game_symbol_boxer",
                        "description": "Aprende artes marciales y usa tus pu\u00f1os para aturdir, derribar, desarmar y deshazte de tu oponente.",
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
                                "long_description": "\u00bfTe cansa que te intimiden los no-muertos? \u00a1Los zombis no pueden morder si les arrancas sus malditos dientes! Crea armas de nudillos de calidad 2 deficiente e inflige un 10 % m\u00e1s de da\u00f1o con los pu\u00f1os. Los golpes en la cabeza niegan la capacidad de infecci\u00f3n. Desbloquea nudillos de hierro hechos a mano.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Rascador",
                                "long_description": "Has estado en algunas peleas y puedes resistir. Fabrica armas de nudillos de calidad 3 justa e inflige un 20\u00a0% m\u00e1s de da\u00f1o con los pu\u00f1os y obt\u00e9n un 30\u00a0de posibilidades de hacer tambalearse a tus oponentes con ataques poderosos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Bateador",
                                "long_description": "Todas las peleas y trifulcas han dado sus frutos y ahora eres un verdadero bateador. F\u00e1brica armas de nudillos de calidad 4 buena e inflige un 30\u00a0% m\u00e1s de da\u00f1o con los pu\u00f1os. Los ataques poderosos a la cabeza tienen un 20\u00a0% de posibilidades de derribar a tu oponente.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Boxeador profesional",
                                "long_description": "Ahora eres lo suficientemente bueno para competir en el boxeo profesional, pero por ahora, aplastar las caras de los zombis tendr\u00e1 que bastar. Fabrica armas de nudillos de calidad 5 genial e inflige un 40\u00a0% m\u00e1s de da\u00f1o con los pu\u00f1os. Los ataques poderosos a la cabeza tienen un 30\u00a0% de posibilidades de derribar a tu oponente.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Artista en artes marciales mixtas",
                                "long_description": "Ahora eres un completo artista en artes marciales mixtas y eres un arma letal registrada. Inflige un 50\u00a0% m\u00e1s de da\u00f1o y tendr\u00e1s posibilidades m\u00e1s altas de hacer explotar cabezas con tus pu\u00f1etazos.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkMachineGunnerName",
                        "parent": "skillFortitudeCombat",
                        "name": "Ametrallador",
                        "icon": "ui_game_symbol_rifle",
                        "description": "Convi\u00e9rtete en un comando usando rifles de asalto para matar a tus enemigos.",
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
                                "short_description": "Gru\u00f1ido",
                                "long_description": "Lo tuyo es rociar y rezar. Crea ametralladoras de calidad 2 deficiente. Inflige un 10% m\u00e1s de da\u00f1o, un 5 % m\u00e1s de velocidad de disparo y un 10 % m\u00e1s de recarga con armas cortas.\\nDesbloquea la creaci\u00f3n de Ak47.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Guerrilla",
                                "long_description": "No eres un comando, pero haces lo que sea necesario para cumplir con el trabajo. Crea ametralladoras de calidad 3 justa, infligen un 20 % m\u00e1s de da\u00f1o, un 10 % m\u00e1s de velocidad de disparo y recargan un 15 % m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Soldado",
                                "long_description": "Participar en tantos combates ha agudizado tus habilidades y ahora eres un soldado. Crea ametralladoras de calidad 4 buena, infligen un 30 % m\u00e1s de da\u00f1o, un 15% m\u00e1s de velocidad de disparo y recargan un 20 % m\u00e1s r\u00e1pido. Comando Adrenalina: Cada tiro marcado con armas autom\u00e1ticas te da 2 de resistencia.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Fuerzas especiales",
                                "long_description": "Tu habilidad ahora es comparable a la de las fuerzas especiales. Fabrica ametralladoras de calidad 5 genial, inflige un 40\u00a0% m\u00e1s de da\u00f1o, aumenta la velocidad de disparo en un 20\u00a0% y recarga un 25\u00a0% m\u00e1s r\u00e1pido. Comando Adrenalina: Cada tiro acertado con armas autom\u00e1ticas te da 4 de resistencia.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ametrallador",
                                "long_description": "Ahora eres el mejor ametrallador. Inflige un 50 % m\u00e1s de da\u00f1o, con un 25 % m\u00e1s de velocidad de disparo y recarga un 30 % m\u00e1s r\u00e1pida. Comando Adrenalina: Cada tiro marcado con armas autom\u00e1ticas te da 6 de resistencia.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillFortitudeSurvivalName",
                "name": "Beneficios de supervivencia",
                "icon": "ui_game_symbol_survival",
                "perks": [
                    {
                        "name_key": "perkTheHuntsmanName",
                        "parent": "skillFortitudeSurvival",
                        "name": "El cazador",
                        "icon": "ui_game_symbol_archery",
                        "description": "Especial\u00edzate en cazar a tu presa y cosechar m\u00e1s carne, hueso y cuero.",
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
                                "long_description": "Est\u00e1s en la senda del cazador. Cosecha un 20 % m\u00e1s de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Cazador furtivo",
                                "long_description": "Te est\u00e1s volviendo adepto y est\u00e1s desollando y cosechando carne. Cosecha un 40 % m\u00e1s de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cazador",
                                "long_description": "Vivir en la naturaleza se est\u00e1 convirtiendo en algo natural para ti. Cosecha un 60 % m\u00e1s de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Carnicero",
                                "long_description": "Sabes exactamente c\u00f3mo conseguir los cortes perfectos. Cosecha un 80 % m\u00e1s de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "El cazador",
                                "long_description": "Eres un verdadero hombre de monta\u00f1a y no dejas que nada se desperdicie. Cosecha un 100 % m\u00e1s de recursos de los animales utilizando cualquier herramienta o arma con filo.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkWellInsulatedName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Bien aislado",
                        "icon": "ui_game_symbol_temperature",
                        "description": "Especial\u00edzate en usar una combinaci\u00f3n de ropa y resistencia natural para sobrevivir incluso en los ambientes m\u00e1s hostiles.",
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
                                "long_description": "Te gusta el clima templado, pero puedes soportar un poco de fluctuaci\u00f3n de temperatura. Obtienes 10 de aislamiento contra el calor y contra el fr\u00edo y pierdes un 15\u00a0% menos de comida y agua cuando tienes fr\u00edo o demasiado calor.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Resistente a las inclemencias clim\u00e1ticas",
                                "long_description": "Eres resistente al clima muy intenso y pierdes un 30\u00a0% menos de comida y agua cuando tienes fr\u00edo o demasiado calor. Obtienes 20 de aislamiento contra el calor y contra el fr\u00edo.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Extremadamente inmune a los elementos",
                                "long_description": "Ahora puedes soportar el clima extremadamente intenso y, en general, no te importan las condiciones clim\u00e1ticas. Nunca sufrir\u00e1s las etapas m\u00e1s graves de los efectos del estado por temperatura.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkLivingOffTheLandName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Vivir de la tierra",
                        "icon": "ui_game_symbol_tree",
                        "description": "Especial\u00edcese en cosechar m\u00e1s cultivos usando sus manos o una herramienta.",
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
                                "long_description": "Duplica la cosecha de los cultivos silvestres o plantados. Puedes fabricar semillas para flores y plantas decorativas como vara de oro, crisantemo, aloe y yuca.\\nCrear las parcelas agr\u00edcolas cuesta un 30\u00a0% menos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Forastero",
                                "long_description": "Puedes hacer semillas para bayas y verduras.\\nCrear las parcelas agr\u00edcolas cuesta un 50 % menos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Granjero",
                                "long_description": "Triplica la cosecha de los cultivos silvestres o plantados.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkPainToleranceName",
                        "parent": "skillFortitudeSurvival",
                        "name": "Tolerancia al dolor",
                        "icon": "ui_game_symbol_character",
                        "description": "Especial\u00edzate en encogerte de hombros ante los golpes, luchar contra el dolor y permanecer en la pelea cuando los dem\u00e1s no valgan para nada. ",
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
                                "long_description": "Te gusta pensar que eres duro porque ya no tienes mand\u00edbula de cristal. Reduce las p\u00e9rdidas de PS un 5 %.\\n20 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Curtido",
                                "long_description": "Los huesos rotos y los cortes son la vida cuando uno est\u00e1 curtido. Reduce las p\u00e9rdidas de PS un 10 %.\\n40 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Resistente",
                                "long_description": "Despu\u00e9s de todos los golpes que has soportado, ahora eres muy resistente. Reduce las p\u00e9rdidas de PS un 15 % y tienes un 60 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Masoquista",
                                "long_description": "Va a hacer falta mucho m\u00e1s que eso para derribarte. Reduce las p\u00e9rdidas de PS un 20 % y tienes un 80 % menos de probabilidad de quedar aturdido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ment\u00f3n de hierro",
                                "long_description": "Parece que te gusta el dolor y ahora tienes un ment\u00f3n de hierro. Reduce las p\u00e9rdidas de PS un 25 % y no tienes probabilidades de quedar aturdido.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillFortitudeRecoveryName",
                "name": "Beneficios de recuperaci\u00f3n",
                "icon": "ui_game_symbol_water",
                "perks": [
                    {
                        "name_key": "perkHealingFactorName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Factor de curaci\u00f3n",
                        "icon": "ui_game_symbol_healing_factor",
                        "description": "Especial\u00edzate en aumentar las tasas naturales de curaci\u00f3n siempre y cuando no te est\u00e9s muriendo de hambre.\\n\\nla autocuraci\u00f3n no funcionar\u00e1 cuando se te acabe la comida o el agua.",
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
                                "short_description": "Metabolismo r\u00e1pido",
                                "long_description": "Debes tener un metabolismo r\u00e1pido. Obtienes 1 de salud cada 90 segundos con una curaci\u00f3n natural. Las heridas cr\u00edticas se curan un 20\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Sanador r\u00e1pido",
                                "long_description": "Pareces ser un sanador r\u00e1pido. Obtienes 1 de salud cada 45 segundos con curaci\u00f3n natural. Las heridas cr\u00edticas se curan un 40\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Animal",
                                "long_description": "\u00bfEres parte animal? Obtienes 1 de salud cada 20 segundos con curaci\u00f3n natural. Las heridas cr\u00edticas se curan un 60\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Regeneraci\u00f3n",
                                "long_description": "Parece que regeneras tu salud s\u00faper r\u00e1pido. Obtienes 1 de salud cada 10 segundos con curaci\u00f3n natural. Las heridas cr\u00edticas se curan un 80\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Genes mutantes",
                                "long_description": "Debes tener genes mutantes por culpa de la radiaci\u00f3n. Obtienes 1 de salud cada 6 segundos con curaci\u00f3n natural. Las heridas cr\u00edticas se curan el doble de r\u00e1pido.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkSlowMetabolismName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Tripa de hierro",
                        "icon": "ui_game_symbol_stomach",
                        "description": "Especial\u00edzate en salud gastrointestinal para usar menos calor\u00edas y beneficiarte m\u00e1s con la comida. Usa menos ox\u00edgeno al nadar.",
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
                                "long_description": "La salud de tu est\u00f3mago no es perfecta, pero es mejor que la de un merodeador promedio. Reduce la p\u00e9rdida de comida y agua por esfuerzo f\u00edsico en un 5\u00a0%.\\nPuedes mantener la respiraci\u00f3n durante 84 segundos. La posibilidad de disenter\u00eda se reduce en un 1\u00a0%. Los potenciadores de los elementos consumibles duran un 10\u00a0% m\u00e1s.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Una constituci\u00f3n fuerte",
                                "long_description": "Te sales con la tuya comiendo muchas cosas que matar\u00edan a la mayor\u00eda de la gente. Reduce la p\u00e9rdida de comida y agua por esfuerzo f\u00edsico en un 10\u00a0%.\\nPuedes mantener la respiraci\u00f3n durante 108 segundos. La posibilidad de disenter\u00eda se reduce en un 2\u00a0%. Los potenciadores de los elementos consumibles duran un 20\u00a0% m\u00e1s.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Gran metabolismo",
                                "long_description": "Incluso cuando te sientes un poco enfermo, tiendes a superarlo r\u00e1pidamente. Reduce la p\u00e9rdida de comida y agua por esfuerzo f\u00edsico en un 15\u00a0%.\\nPuedes mantener la respiraci\u00f3n durante 132 segundos. La posibilidad de disenter\u00eda se reduce en un 3\u00a0%. Los potenciadores de los elementos consumibles duran un 30\u00a0% m\u00e1s.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Inmunidad intr\u00ednseca",
                                "long_description": "Parece que eres casi inmune a todo lo que comes. Reduce la p\u00e9rdida de comida y agua por esfuerzo f\u00edsico en un 20\u00a0%.\\nPuedes mantener la respiraci\u00f3n durante 156 segundos. La posibilidad de disenter\u00eda se reduce en un 4\u00a0%. Los potenciadores de los elementos consumibles duran un 40\u00a0% m\u00e1s.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Tripa de hierro",
                                "long_description": "Tienes un est\u00f3mago de hierro y probablemente podr\u00edas comer cristal y sobrevivir. Reduce la p\u00e9rdida de comida y agua por esfuerzo f\u00edsico en un 25\u00a0%.\\nPuedes mantener la respiraci\u00f3n durante 180 segundos. La posibilidad de disenter\u00eda se reduce en un 5\u00a0%. Los potenciadores de los consumibles duran un 50\u00a0% m\u00e1s.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkRuleOneCardioName",
                        "parent": "skillFortitudeRecovery",
                        "name": "Regla 1: Cardio",
                        "icon": "ui_game_symbol_cardio",
                        "description": "Entr\u00e9nate en la mejor t\u00e1ctica anti zombis: Huir de ellos.",
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
                                "long_description": "Solo tienes que pones un pie delante del otro. Ahora eres un senderista. Aumenta la regeneraci\u00f3n de la resistencia en un 10% al correr.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "El hombre que corre",
                                "long_description": "Todos los uniformes est\u00e1n en el espejo retrovisor ahora, ya que eres un corredor con una cardio excelente. Aumenta la regeneraci\u00f3n de la resistencia en un 20 % al correr.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Triatleta",
                                "long_description": "Aumenta la regeneraci\u00f3n de la resistencia en un 30 % al correr.",
                                "cost": 1
                            }
                        }
                    }
                ]
            }
        ]
    },
    "attAgility": {
        "name_key": "attAgilityName",
        "name": "Atributo: Agilidad",
        "icon": "ui_game_symbol_agility",
        "description": "La agilidad es la medida de tu destreza atl\u00e9tica.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Torpe",
                "long_description": "Eres lo m\u00e1s torpe que jam\u00e1s se ha visto, pero a\u00fan as\u00ed infliges un 200 % de da\u00f1o en la cabeza y tienes un 5 % de posibilidades de desmembrar con arcos, pistolas y cuchillos.",
                "cost": 1
            },
            "2": {
                "short_description": "Titubeo",
                "long_description": "No conseguiste entrar en el equipo de f\u00fatbol, pero eso no te ha impedido entrenar. Inflige un 210 % de da\u00f1os causado por un disparo en la cabeza y tienes un 10 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "3": {
                "short_description": "Tosco",
                "long_description": "Sigues siendo ruidoso y tosco, pero puedes infligir un 220 % de da\u00f1o en la cabeza y tienes un 15 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "4": {
                "short_description": "Inepto",
                "long_description": "Tu destreza es un poco inepta, pero puedes infligir un 230 % de da\u00f1o en la cabeza y tienes un 20 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "5": {
                "short_description": "\u00c1gil",
                "long_description": "Ahora eres \u00e1gil y tienes un 240 % de da\u00f1o en la cabeza y un 25 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 1
            },
            "6": {
                "short_description": "\u00c1gil",
                "long_description": "Tu movimiento es ahora muy \u00e1gil y causa un 250 % de da\u00f1o en los tiros a la cabeza y tienes un 30 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "7": {
                "short_description": "Destreza",
                "long_description": "Tu destreza es impresionante. Inflige un 260 % de da\u00f1o causado por disparo en la cabeza y tienes un 35 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "8": {
                "short_description": "Gimnasta",
                "long_description": "Desplazarte con fluidez y aterrizar en tus pies son una habilidad natural para ti. Inflige un 270 % de da\u00f1o causado por disparo en la cabeza y tienes un 40 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 2
            },
            "9": {
                "short_description": "Atleta profesional",
                "long_description": "Tu agilidad es tan buena que podr\u00edas ser un atleta profesional. Inflige un 285 % de da\u00f1o causado por disparo en la cabeza y tienes un 45 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 3
            },
            "10": {
                "short_description": "Maestro del parkour",
                "long_description": "Tu destreza es inigualable. Inflige un 300 % de da\u00f1o causado por disparo en la cabeza y tienes un 50 % de posibilidades de desmembrar con arcos, armas cortas y cuchillos.",
                "cost": 3
            }
        },
        "skills": [
            {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": [
                    {
                        "name_key": "perkArcheryName",
                        "parent": "skillAgilityCombat",
                        "name": "Arquer\u00eda",
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
                                "long_description": "Muchos inician la senda del cazador, pero pocos la pueden terminar. Crea 2 arcos de calidad deficiente, infligen un 10 % m\u00e1s de da\u00f1o, un 10 % m\u00e1s de velocidad de punter\u00eda, tiro y recarga con arcos. Desbloquea la fabricaci\u00f3n del arco de madera y la ballesta de hierro.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Arquero",
                                "long_description": "Aun tienes mucho que aprender, peque\u00f1o saltamontes. Crea 3 arcos de calidad media, infligen un 20 % m\u00e1s de da\u00f1o, un 20 % m\u00e1s de velocidad de punter\u00eda, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Tirador",
                                "long_description": "Todo el riguroso entrenamiento te ha convertido en un tirador con arcos. Crea 4 arcos de calidad buena, infligen un 30 % m\u00e1s de da\u00f1o, un 30 % m\u00e1s de velocidad de punter\u00eda, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Peluquero",
                                "long_description": "Has mejorado tanto en la arquer\u00eda que puedes peinar a cualquiera a distancia con la flecha. Crea 5 arcos de calidad genial, infligen un 40 % m\u00e1s de da\u00f1o, un 40 % m\u00e1s de velocidad de punter\u00eda, tiro y recarga con arcos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Cazador",
                                "long_description": "Has dominado la arquer\u00eda y ahora eres un cazador. Inflige un 50 % m\u00e1s de da\u00f1o, un 50 % m\u00e1s r\u00e1pido, apunta, desenfunda y recarga con arcos.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkGunslingerName",
                        "parent": "skillAgilityCombat",
                        "name": "Pistola f\u00e1cil",
                        "icon": "ui_game_symbol_gunslinger",
                        "description": "Resuelve tus disputas a la antigua usanza y s\u00e9 un pistolero en el apocalipsis. Domina el uso de las armas cortas y las metralletas. Desbloquea la fabricaci\u00f3n de pistolas.",
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
                                "long_description": "No eres Wyatt Earp, pero eres mejor que el vagabundo promedio. Crea armas cortas de calidad 2 deficiente, infligen un 10 % m\u00e1s de da\u00f1o, un 5 % m\u00e1s de velocidad de disparo y un 10 % m\u00e1s de velocidad de recarga con armas cortas.\\nDesbloquea la fabricaci\u00f3n de pistolas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Forajido",
                                "long_description": "Te est\u00e1s haciendo un nombre, forajido. Crear armas cortas de calidad 3 justa, infligen un 20 % m\u00e1s de da\u00f1o, un 10% m\u00e1s de velocidad de disparo, y recargan un 15 % m\u00e1s r\u00e1pido con armas cortas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Sheriff",
                                "long_description": "Puedes mantener la mayor\u00eda de las situaciones bajo control, sheriff. Crear armas cortas de calidad 4 buena, infligen un 30 % m\u00e1s de da\u00f1o, un 15 % m\u00e1s de velocidad de disparo y recargan un 20 % m\u00e1s r\u00e1pido. Da\u00f1os Cr\u00edticos: 5 impactos sucesivos en poco tiempo causan da\u00f1os cr\u00edticos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Pistolero",
                                "long_description": "Ahora eres un pistolero y puedes limpiar un sal\u00f3n lleno de cabrones alborotadores en un abrir y cerrar de ojos. Crear armas cortas de calidad 5 genial, infligen un 40 % m\u00e1s de da\u00f1o, un 20 % m\u00e1s de velocidad de disparo y recargan un 25 % m\u00e1s r\u00e1pido. Da\u00f1os Cr\u00edticos: 4 impactos sucesivos en poco tiempo hacen que el \u00faltimo tiro inflija un 100 % de da\u00f1o extra.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Pistola f\u00e1cil",
                                "long_description": "Eres el pistolero m\u00e1s r\u00e1pido de Navezgane. Inflige un 50% m\u00e1s de da\u00f1o, un 25 % m\u00e1s de velocidad de disparo y un 30 % m\u00e1s de recarga con armas cortas. Da\u00f1os cr\u00edticos: 3 impactos sucesivos en poco tiempo hacen que el \u00faltimo tiro inflija un 100 % de da\u00f1o extra.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkDeepCutsName",
                        "parent": "skillAgilityCombat",
                        "name": "Cortes profundos",
                        "icon": "ui_game_symbol_deep_cuts",
                        "description": "Especial\u00edzate en usar armas blancas como cuchillos o machetes (no hachas) para desangrar a tus enemigos.",
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
                                "long_description": "Puede que tengas una cuchilla desafilada, pero sabes c\u00f3mo usarla. Crea cuchillos malos de calidad 2 e inflige un 10 % m\u00e1s de da\u00f1o. Puedes infligir hasta 3 heridas con sangrado a un enemigo y un ataque poderoso inflige 2. Cada ataque renueve la duraci\u00f3n del sangrado. Los enemigos corren un 10 % m\u00e1s despacio mientras sangran.\\nDesbloquea la creaci\u00f3n de cuchillos de caza.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Chico de los cuchillos",
                                "long_description": "Tus amigos dicen que eres el verdadero chico de los cuchillos. Crea 3 cuchillos de calidad 3 justa e inflige un 20 % m\u00e1s de da\u00f1o. Puedes infligir hasta 4 heridas con sangrado a un enemigo y un ataque poderoso inflige 3.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Maestro de esgrima",
                                "long_description": "Est\u00e1s por encima del resto. Crea cuchillos buenos de calidad 4 e inflige un 30 % m\u00e1s de da\u00f1o. Puedes infligir hasta 5 heridas con sangrado a un enemigo y un ataque poderoso inflige 4. Los golpes de refil\u00f3n tienen un 40\u00a0% de posibilidades de causar 1 herida con sangrado. Los enemigos corren un 15 % m\u00e1s despacio mientras sangran.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Espadach\u00edn",
                                "long_description": "Eres bastante letal con las armas blancas. Crea cuchillos excelentes de calidad 5 e inflige un 40 % m\u00e1s de da\u00f1o. Puedes infligir hasta 6 heridas con sangrado a un enemigo y un ataque poderoso inflige 4. Los golpes de refil\u00f3n tienen un 70\u00a0% de posibilidades de causar 1 herida con sangrado.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Samur\u00e1i",
                                "long_description": "Eres un samur\u00e1i y puedes hacer sushi con tus enemigos. Inflige un 50 % m\u00e1s de da\u00f1o. Puedes infligir hasta 7 heridas con sangrado a un enemigo y un ataque poderoso inflige 5. Todos los golpes de refil\u00f3n causan 1 herida con sangrado. Los enemigos corren un 20 % m\u00e1s despacio mientras sangran.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillAgilityAthleticsName",
                "name": "Beneficios atl\u00e9ticos",
                "icon": "ui_game_symbol_run",
                "perks": [
                    {
                        "name_key": "perkRunAndGunName",
                        "parent": "skillAgilityAthletics",
                        "name": "Correr y disparar",
                        "icon": "ui_game_symbol_run_and_gun",
                        "description": "Mejora la precisi\u00f3n de disparo en marcha y corre m\u00e1s r\u00e1pido mientras recargas cualquier arma a distancia.",
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
                                "long_description": "Rociar y orar. Apuntar est\u00e1 sobrevalorado, dispara primero y haz preguntas despu\u00e9s. La precisi\u00f3n de disparo en marcha mejora un 10 % y la penalizaci\u00f3n de movimiento al recargar se reduce en un 30 %.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Dedos nerviosos",
                                "long_description": "Tus dedos nerviosos pueden meterte en problemas pero te han salvado la piel en muchas ocasiones. La precisi\u00f3n de disparo en marcha mejora un 17 % y la penalizaci\u00f3n de movimiento al recargar se reduce en un 60 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Hombre gatillo",
                                "long_description": "Ahora eres un hombre gatillo mortal y has dominado el arte de correr y disparar. La precisi\u00f3n de disparo en marcha mejora en un 25 % y no tiene penalizaci\u00f3n de movimiento al recargar.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkFlurryOfBlowsName",
                        "parent": "skillAgilityAthletics",
                        "name": "Aluvi\u00f3n de golpes",
                        "icon": "ui_game_symbol_knunchuck",
                        "description": "Especial\u00edzate en armas cuerpo a cuerpo con una sola mano y en sacarle los dientes a tus oponentes en una furiosa r\u00e1faga de golpes r\u00e1pidos.",
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
                                "short_description": "Manos r\u00e1pidas",
                                "long_description": "Has desarrollado manos r\u00e1pidas. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 10 %.\\n\\nEste beneficio se aplica a palos, peleas, cuchillos, machetes y porras paralizantes.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Ataque inesperado",
                                "long_description": "Has desarrollado el ataque inesperado. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 17 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Aluvi\u00f3n de golpes",
                                "long_description": "Has dominado la r\u00e1faga de golpes. Las velocidades de ataque cuerpo a cuerpo con una sola mano aumentan un 25\u00a0%. Cada muerte recarga 30 puntos de resistencia.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkLightArmorName",
                        "parent": "skillAgilityAthletics",
                        "name": "Armadura ligera",
                        "icon": "ui_game_symbol_light_armor2",
                        "description": "Especial\u00edzate en blindaje ligero para aumentar la tasa y la durabilidad del blindaje.",
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
                                "long_description": "Has empezado en la senda del guerrero con armadura ligera. Crea armadura ligera de calidad 2 deficiente, reduce la penalizaci\u00f3n por movimiento de la armadura ligera un 15 % y la penalizaci\u00f3n por resistencia un 10 %. Mejora la durabilidad en un 50 %.\\nDesbloquea la elaboraci\u00f3n de armaduras de cuero.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Militante",
                                "long_description": "Has sobrevivido a algunas batallas y esperas ser un caballero alg\u00fan d\u00eda. Crea armadura ligera de calidad 3 justa, reduce la penalizaci\u00f3n por movimiento de la armadura ligera un 30 % y la penalizaci\u00f3n por resistencia un 20%. Mejora la durabilidad en un 100 %.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Caballero",
                                "long_description": "Todo el duro entrenamiento y las batallas han dado sus frutos, ahora eres un caballero. Crea armadura ligera de calidad 4 buena, reduce la penalizaci\u00f3n por movimiento de la armadura ligera un 50 % y la penalizaci\u00f3n por resistencia un 35 %. Mejora la durabilidad en un 150 %.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Gladiador",
                                "long_description": "Te has hecho un nombre por ti mismo y eres temido por casi todos, ya que ahora eres un gladiador. Crea armadura ligera de calidad 5 genial, reduce la penalizaci\u00f3n por movimiento de la armadura ligera un 6 0% y la penalizaci\u00f3n por resistencia un 50 %. Mejora la durabilidad en un 200 %.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkParkourName",
                        "parent": "skillAgilityAthletics",
                        "name": "Parkour",
                        "icon": "ui_game_symbol_parkour",
                        "description": "Especial\u00edzate en llegar acrob\u00e1ticamente a cualquier lugar al que quieras ir, sin importar cu\u00e1n lejos o abajo pueda estar.",
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
                                "long_description": "Puedes hacer algunos movimientos, pero sobre todo est\u00e1s acostumbrado a caer de bruces. Aumenta la distancia segura de ca\u00edda en un metro y reduce el costo de resistencia de los saltos en un 10 %.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Especialista",
                                "long_description": "Te han salido algunos trucos, pero a veces sus cuentas del hospital son m\u00e1s grandes que lo que cobras. Reduce en un 20\u00a0% el costo de la resistencia al saltar. Aumenta la distancia segura de ca\u00edda en 2 metros y saltas 1 metro m\u00e1s alto.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Adicto a la adrenalina",
                                "long_description": "Ahora eres un adicto a la adrenalina, y asombras a una gran multitud con tus temerosos actos. Reduce en un 30\u00a0% el costo de la resistencia al saltar. Aumenta la distancia segura de ca\u00edda en 4 metros y nunca te fracturar\u00e1s las piernas al caer.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Maestro del parkour",
                                "long_description": "Ahora eres un maestro del parkour y puedes desenvolverte f\u00e1cilmente en situaciones dif\u00edciles. Reduce en un 40\u00a0% el costo de la resistencia al saltar. Aumenta la distancia segura de ca\u00edda en 5 metros, puedes saltar 2 metros m\u00e1s alto y nunca te romper\u00e1s ni te esguinzar\u00e1s una pierna al caer.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillAgilityStealthName",
                "name": "Beneficios de sigilo",
                "icon": "ui_game_symbol_stealth2",
                "perks": [
                    {
                        "name_key": "perkHiddenStrikeName",
                        "parent": "skillAgilityStealth",
                        "name": "Ataque oculto",
                        "icon": "ui_game_symbol_sneak_attack",
                        "description": "Especial\u00edzate en atrapar a tus enemigos desprevenidos mientras te escabulles y est\u00e1n descansando o deambulando sin rumbo.",
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
                                "long_description": "Eres un rajagargantas que prefiere operar desde las sombras y usar el sigilo y los ataques furtivos. Los ataques sigilosos causan un 50 % m\u00e1s de da\u00f1o.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Carnicero",
                                "long_description": "Ahora eres un carnicero y has acumulado algunas habilidades y est\u00e1s dominando el asesinato de arte del asesinato. Los ataques sigilosos causan un 100 % m\u00e1s de da\u00f1o.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Verdugo",
                                "long_description": "Ahora eres un verdugo y est\u00e1s empezando a dominar tu oficio. Los ataques sigilosos causan un 150 % m\u00e1s de da\u00f1o.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Asesino a sangre fr\u00eda",
                                "long_description": "Eres un asesino a sangre fr\u00eda y no sientes remordimientos haciendo tus actos oscuros. Los ataques sigilosos causan un 200 % m\u00e1s de da\u00f1o.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Asesino",
                                "long_description": "Ahora eres el asesino definitivo y puedes infligir el m\u00e1ximo da\u00f1o a tus v\u00edctimas. Los ataques sigilosos causan un 250 % m\u00e1s de da\u00f1o.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkFromTheShadowsName",
                        "parent": "skillAgilityStealth",
                        "name": "De entre las sombras",
                        "icon": "ui_game_symbol_bat",
                        "description": "Especial\u00edcese en andar a escondidas en la oscuridad y hacer menos ruido en general.",
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
                                "long_description": "Esc\u00f3ndete en las sombras un 13\u00a0% m\u00e1s efectivamente, los ruidos de las acciones se amortiguan un 10\u00a0% y el movimiento furtivo es un 10\u00a0% m\u00e1s r\u00e1pido.\\nLos enemigos te buscar\u00e1n hasta por 50 segundos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Sombrador",
                                "long_description": "Esc\u00f3ndete en las sombras un 26\u00a0% m\u00e1s efectivamente, los ruidos de las acciones se amortiguan un 20\u00a0% y el movimiento furtivo es un 20% m\u00e1s r\u00e1pido.\\nLos enemigos te buscar\u00e1n hasta por 40 segundos.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Acosador",
                                "long_description": "Esc\u00f3ndete en las sombras un 39\u00a0% m\u00e1s efectivamente, los ruidos de las acciones se amortiguan un 30\u00a0%, y el movimiento furtivo es un 30% m\u00e1s r\u00e1pido.\\nLos enemigos te buscar\u00e1n hasta por 30 segundos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Merodeador",
                                "long_description": "Esc\u00f3ndete en las sombras un 52\u00a0% m\u00e1s efectivamente, los ruidos de las acciones se amortiguan un 40\u00a0%, y el movimiento furtivo es un 40% m\u00e1s r\u00e1pido.\\nLos enemigos te buscar\u00e1n hasta por 25 segundos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ninja de las sombras",
                                "long_description": "Esc\u00f3ndete en las sombras un 65\u00a0% m\u00e1s efectivamente, los ruidos de las acciones se amortiguan un 50\u00a0% y el movimiento furtivo es un 50% m\u00e1s r\u00e1pido.\\nLos enemigos te buscar\u00e1n hasta por 20 segundos.",
                                "cost": 1
                            }
                        }
                    }
                ]
            }
        ]
    },
    "attIntellect": {
        "name_key": "attIntellectName",
        "name": "Atributo: Intelecto",
        "icon": "ui_game_symbol_intellect",
        "description": "El intelecto es la medida de tu capacidad mental. Incrementar el intelecto mejora el da\u00f1o por disparos a la cabeza con armas regidas por el intelecto como las torretas rob\u00f3ticas y las porras de aturdimiento.",
        "max_level": 10,
        "levels": {
            "1": {
                "short_description": "Cabeza de bloque",
                "long_description": "Eres tonto como t\u00fa solo, pero sigues causando un 200\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 5\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 1
            },
            "2": {
                "short_description": "Zoquete",
                "long_description": "No eres el m\u00e1s brillante, pero de vez en cuando das en el clavo. Infliges un 210\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 10\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 1
            },
            "3": {
                "short_description": "Idiota",
                "long_description": "Incluso a los m\u00e1s tontos se les ocurren cosas geniales de vez en cuando. Infliges un 220\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 15\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 1
            },
            "4": {
                "short_description": "Cabez\u00f3n",
                "long_description": "No te gusta aprender cosas nuevas, pero lo har\u00e1s si es necesario. Infliges un 230\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 20\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 1
            },
            "5": {
                "short_description": "Promedio",
                "long_description": "Ser promedio es mejor que estar por debajo de la media. Infliges un 240\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 25\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 1
            },
            "6": {
                "short_description": "Inteligente",
                "long_description": "Te est\u00e1s volviendo muy listo. Infliges un 250\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 30\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 2
            },
            "7": {
                "short_description": "Brillante",
                "long_description": "Tus compa\u00f1eros te consideran brillante. Infliges un 260\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 35\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 2
            },
            "8": {
                "short_description": "Intelectual",
                "long_description": "Tu intelecto es impresionante. Infliges un 270\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 40\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 2
            },
            "9": {
                "short_description": "Genio",
                "long_description": "Ahora eres un verdadero genio. Infliges un 285\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 45\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas.",
                "cost": 3
            },
            "10": {
                "short_description": "Mente maestra",
                "long_description": "Eres un genio del intelecto. Infliges un 300\u00a0% de da\u00f1o por disparo a la cabeza y tienes un 50\u00a0% de posibilidades de desmembrar con porras de aturdimiento y torretas rob\u00f3ticas",
                "cost": 3
            }
        },
        "skills": [
            {
                "name_key": "skillCombatPerksName",
                "name": "Beneficios de combate",
                "icon": "ui_game_symbol_marksmanship",
                "perks": [
                    {
                        "name_key": "perkElectrocutionerName",
                        "parent": "skillIntellectCombat",
                        "name": "Electrocutador",
                        "icon": "ui_game_symbol_electric_power",
                        "description": "Aprende a usar los bastones de aturdimiento de manera m\u00e1s efectiva. Incapacita a las v\u00edctimas m\u00e1s f\u00e1cilmente e inflige m\u00e1s da\u00f1o.",
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
                                "long_description": "\u00bfD\u00f3nde est\u00e1n las instrucciones? Eres inteligente, recuerda apuntarlo lejos de ti y apretar el gatillo. Crea porras de aturdimiento de calidad 2 deficientes, infligen un 10 % m\u00e1s de da\u00f1o y aturden a las v\u00edctimas un 20 % m\u00e1s tiempo.\\nDesbloquea la elaboraci\u00f3n del bast\u00f3n de aturdimiento.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Pistola de aturdimiento",
                                "long_description": "Est\u00e1s aprendiendo a usar porras paralizantes para incapacitar a tus enemigos. Crea porras de aturdimiento de calidad 3 justa, infligen un 20 % m\u00e1s de da\u00f1o y aturden a las v\u00edctimas un 40 % m\u00e1s tiempo.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Pincho de ganado",
                                "long_description": "Te est\u00e1s volviendo peligroso con las porras aturdidoras, probablemente podr\u00edas noquear al ganado si los zombis no se las hubieran comido todas. Crea porras de aturdimiento de calidad 4 buenas, infligen un 30% m\u00e1s de da\u00f1o y aturden a las v\u00edctimas un 60% m\u00e1s tiempo.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Peligro: Alto voltaje",
                                "long_description": "Ahora eres letal con porras aturdidoras. Crea porras de aturdimiento de calidad 5 geniales, infligen un 40 % m\u00e1s de da\u00f1o y aturden a las v\u00edctimas un 80 % m\u00e1s tiempo.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Electrocutador",
                                "long_description": "Eres lo \u00faltimo que ven venir y ahora eres un verdugo con porras de aturdimiento. Inflige un 50 % m\u00e1s de da\u00f1o y aturde a las v\u00edctimas un 100 % m\u00e1s de tiempo.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkTurretsName",
                        "parent": "skillIntellectCombat",
                        "name": "Creador de rob\u00f3tica",
                        "icon": "ui_game_symbol_electric_turret",
                        "description": "Te fascina la rob\u00f3tica. Aprende a usar y a fabricar armas desplegables.",
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
                                "short_description": "Proyectos cient\u00edficos",
                                "long_description": "Tienes algunas ideas alocadas e innovadoras, pero su implementaci\u00f3n podr\u00eda necesitar algo de trabajo. Crea robots de calidad 2 deficiente, inflige un 10\u00a0% m\u00e1s de da\u00f1o, aumenta la velocidad de disparo en un 30\u00a0% y recarga 10 rondas de balas adicionales. El alcance activo de los robots incrementa de 10 a 14 metros.\\nPuedes desplegar varios robots, pero solo los m\u00e1s cercanos estar\u00e1n activas.\\nDesbloquea la fabricaci\u00f3n de mazos rob\u00f3ticos",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Rob\u00f3tica b\u00e1sica",
                                "long_description": "Ahora est\u00e1s llevando tus proyectos al siguiente nivel. Crea robots de calidad 3 justa, inflige un 20\u00a0% m\u00e1s de da\u00f1o, aumenta la velocidad de disparo en un 60\u00a0% y recarga 20 rondas de balas adicionales. El alcance activo de los robots es de 15 metros.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Armamento automatizado",
                                "long_description": "Has dominado lo b\u00e1sico del armamento automatizado. Crea robots de calidad 4 buena, inflige un 30\u00a0% m\u00e1s de da\u00f1o, aumenta la velocidad de disparo en un 90\u00a0% y recarga 30 rondas de balas adicionales. El alcance activo de los robots es de 16 metros.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Rob\u00f3tica avanzada",
                                "long_description": "Debes venir del a\u00f1o 2077, est\u00e1s creando tecnolog\u00eda futurista. Crea robots de calidad 5 genial, inflige un 40\u00a0% m\u00e1s de da\u00f1o, aumenta la velocidad de disparo en un 120\u00a0% y recarga 40 rondas de balas adicionales. Recarga las armas rob\u00f3ticas un 10\u00a0% m\u00e1s r\u00e1pido. El alcance activo de los robots es de 17 metros.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Experto en rob\u00f3tica",
                                "long_description": "Ahora eres un experto en rob\u00f3tica. Recarga las armas rob\u00f3ticas un 20\u00a0% m\u00e1s r\u00e1pido y recarga 50 rondas de balas adicionales. El alcance activo de los robots es de 18 metros.\\nDos robots desplegados pueden estar activos al mismo tiempo.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillIntellectInfluenceName",
                "name": "Beneficios de influencia",
                "icon": "ui_game_symbol_influence",
                "perks": [
                    {
                        "name_key": "perkBetterBarterName",
                        "parent": "skillIntellectInfluence",
                        "name": "Mejor trueque",
                        "icon": "ui_game_symbol_barter",
                        "description": "Especial\u00edzate en convencer a los comerciantes de la zona para que te den un mejor trato y te muestren d\u00f3nde guardan las cosas realmente buenas.",
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
                                "long_description": "Eres bueno regateando y comerciando, nunca pagas el precio inicial de nada. Obt\u00e9n un 5 % m\u00e1s de descuento comprando y vendiendo mercanc\u00eda con los comerciantes.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Vendedor",
                                "long_description": "Debes haber sido vendedor antes del apocalipsis, por el mont\u00f3n de buenos tratos que cierras. Obt\u00e9n un 10 % m\u00e1s de descuento comprando y vendiendo con los comerciantes.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Gerente de ventas",
                                "long_description": "Act\u00faas como un gerente de ventas y tienes la autoridad necesaria para hacer los mejores tratos. Obt\u00e9n un 15 % m\u00e1s de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes oculta un bot\u00edn mejor.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Magnate de Wall Street",
                                "long_description": "Te ir\u00eda bien si el mercado de valores siguiera existiendo. Obt\u00e9n un 20 % m\u00e1s de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes muestra un bot\u00edn a\u00fan mejor.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Director general de marketing corporativo",
                                "long_description": "Eres como un Gerente Corporativo, compras bienes a los precios m\u00e1s bajos y vendes con una ganancia enorme. Obt\u00e9n un 25 % m\u00e1s de descuento comprando y vendiendo con los comerciantes. El escondite secreto de los comerciantes muestra el mejor bot\u00edn.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkDaringAdventurerName",
                        "parent": "skillIntellectInfluence",
                        "name": "El aventurero temerario",
                        "icon": "ui_game_symbol_adventure",
                        "description": "\u00a1S\u00e9 un aventurero temerario!\\nConsigue mejores recompensas por completar misiones.",
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
                                "long_description": "Arriesgar el cuello todos los d\u00edas tiene sus ventajas. Obtienes una opci\u00f3n adicional para las recompensas de las misiones y 5\u00a0% m\u00e1s ducados.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Saqueador",
                                "long_description": "Los comerciantes saben que puedes hacer el trabajo, saqueador. Obtienes dos opciones adicionales de recompensas de b\u00fasqueda y 10\u00a0% m\u00e1s ducados.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Mercenario",
                                "long_description": "Te has hecho un nombre como mercenario a sueldo. Obtienes tres opciones adicionales de recompensas de b\u00fasqueda y 15\u00a0% m\u00e1s ducados.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Aventurero audaz",
                                "long_description": "T\u00fa eres el aventurero audaz y obtendr\u00e1s las mejores recompensas por tus servicios. Ahora puedes elegir dos recompensas de b\u00fasqueda y 20\u00a0% m\u00e1s ducados.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkCharismaticNatureName",
                        "parent": "skillIntellectInfluence",
                        "name": "Naturaleza carism\u00e1tica",
                        "icon": "ui_game_symbol_talk",
                        "description": "Eres una inspiraci\u00f3n para tus aliados, aumentando su destreza en el combate.",
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
                                "long_description": "La gente se inspira cuando est\u00e1s cerca de ellos. Los aliados cercanos suman 20 de salud y resistencia cuando est\u00e1n cerca de ti.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "L\u00edder del equipo",
                                "long_description": "Eres un l\u00edder de equipo e inspiras a los que te rodean. El da\u00f1o en bloque y cuerpo a cuerpo de los aliados cercano aumentan en un 20\u00a0%.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Orador motivacional",
                                "long_description": "Eres una fuerza motivadora. Los aliados cercanos reciben un 10\u00a0% menos de da\u00f1o de todo tipo, reciben la mitad del da\u00f1o por hemorragia y dejan de sangrar el doble de r\u00e1pido.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "L\u00edder de escuadr\u00f3n",
                                "long_description": "Tus habilidades de liderazgo son de primera clase. Los aliados est\u00e1n tan impresionados contigo que consiguen +1 de atributos cuando est\u00e1n cerca de ti.",
                                "cost": 1
                            }
                        }
                    }
                ]
            },
            {
                "name_key": "skillIntellectCraftsmanshipName",
                "name": "Beneficios de la artesan\u00eda",
                "icon": "ui_game_symbol_misc_crafting",
                "perks": [
                    {
                        "name_key": "perkPhysicianName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "M\u00e9dico",
                        "icon": "ui_game_symbol_medical",
                        "description": "Usa los art\u00edculos de medicina y salud con m\u00e1s eficacia.",
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
                                "long_description": "Los art\u00edculos de curaci\u00f3n curan un 25\u00a0% m\u00e1s de salud con el tiempo. Obtienes un 40\u00a0% m\u00e1s de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar estaciones qu\u00edmicas, vendajes de primeros auxilios y yesos.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Doctor",
                                "long_description": "Los art\u00edculos de curaci\u00f3n curan un 40\u00a0% m\u00e1s de salud con el tiempo. Obtienes un 60\u00a0% m\u00e1s de EXP usando vendas, vendas de primeros auxilios, botiquines de primeros auxilios y tablillas. Fabrica objetos un 20\u00a0% m\u00e1s r\u00e1pido en las estaciones de qu\u00edmica.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Cirujano",
                                "long_description": "Los art\u00edculos de curaci\u00f3n curan un 55\u00a0% m\u00e1s de salud con el tiempo. Obtienes un 80\u00a0% m\u00e1s de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar botiquines de primeros auxilios y esteroides.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Creador de milagros",
                                "long_description": "Creador de milagros. Los art\u00edculos de curaci\u00f3n curan un 75\u00a0% m\u00e1s de salud con el tiempo. Obtienes un 100\u00a0% m\u00e1s de EXP usando vendajes, vendajes de primeros auxilios, botiquines de primeros auxilios y tablillas. Puedes fabricar bocados de fortaleza, jarabe Recog y antibi\u00f3ticos. Fabrica objetos un 40\u00a0% m\u00e1s r\u00e1pido en las estaciones de qu\u00edmica.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkAdvancedEngineeringName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "Ingenier\u00eda avanzada",
                        "icon": "ui_game_symbol_workbench",
                        "description": "Elementos de ingenier\u00eda avanzada como bancos de trabajo, art\u00edculos el\u00e9ctricos y trampas, y trabaja un 20 % m\u00e1s r\u00e1pido en los bancos de trabajo.",
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
                                "long_description": "Ahora eres herrero y puedes forjar hierro y otros objetos met\u00e1licos. Fabrica fraguas y fabrica objetos con ellas un 20\u00a0% m\u00e1s r\u00e1pido. Fabrica pegamento m\u00e1s barato.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Manitas",
                                "long_description": "Tus habilidades como manitas est\u00e1n resultando \u00fatiles en el apocalipsis. Fabrica bancos de trabajo y hormigoneras de cemento, y crea objetos con ellos un 20\u00a0% m\u00e1s r\u00e1pido.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Electricista",
                                "long_description": "Ahora eres electricista. Aprende a fabricar generadores y a construir sistemas avanzados de defensa de base, como cercas el\u00e9ctricas y trampas de cuchillas. Fabrica fibra militar. Gana un 20\u00a0% de EXP con las muertes de las trampas el\u00e9ctricas.\\nArtesano eficiente. Todas las recetas de fragua cuestan un 10\u00a0% menos, la elaboraci\u00f3n de acero forjado y los dispositivos el\u00e9ctricos cuestan un 15\u00a0% menos.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Inventor",
                                "long_description": "Aprende a fabricar torretas de escopeta para defensa de base concentrada de corto alcance, bancos de bater\u00edas y pistolas de clavos. Obt\u00e9n un 35\u00a0% de EXP de las muertes por trampas el\u00e9ctricas.\\nTodas las recetas de fragua cuestan un 15\u00a0% menos, la elaboraci\u00f3n de acero forjado y los dispositivos el\u00e9ctricos cuestan un 25\u00a0% menos.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Ingeniero avanzado",
                                "long_description": "Aprende a construir torretas autom\u00e1ticas con metralleta para la mejor defensa de la base a distancia, y crisoles para forjar acero en las fraguas. Obt\u00e9n un 50 % de EXP de las muertes por trampas el\u00e9ctricas.\\nTodas las recetas de fragua cuestan un 20 % menos, la elaboraci\u00f3n de acero forjado y los dispositivos el\u00e9ctricos cuestan un 35 % menos.",
                                "cost": 1
                            }
                        }
                    },
                    {
                        "name_key": "perkGreaseMonkeyName",
                        "parent": "skillIntellectCraftsmanship",
                        "name": "Mono grasiento",
                        "icon": "ui_game_symbol_service",
                        "description": "\u00a1Aprende a construir veh\u00edculos a partir de chatarra en el p\u00e1ramo!\\n\\nLos veh\u00edculos se pueden montar a partir de piezas sin esta ventaja.",
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
                                "short_description": "Mec\u00e1nico de bicicletas",
                                "long_description": "Tu pasi\u00f3n por jugar y no caminar a todas partes te ha llevado por el camino de la mec\u00e1nica de bicicletas. Puedes fabricar piezas de bicicleta. Ruedas artesanales y piezas de bicicleta un 33 % m\u00e1s baratas.",
                                "cost": 1
                            },
                            "2": {
                                "short_description": "Maestro de la minimoto",
                                "long_description": "\u00bfPor qu\u00e9 pedalear a todas partes cuando hay suficiente chatarra para hacer una minimoto? Puedes fabricar piezas de minimoto, bidones de gas y bater\u00edas de coche de calidad 2. Fabrica piezas de minimoto un 33\u00a0% m\u00e1s baratas.",
                                "cost": 1
                            },
                            "3": {
                                "short_description": "Mani\u00e1tico de la motocicleta",
                                "long_description": "Era solo cuesti\u00f3n de tiempo antes de que ir m\u00e1s r\u00e1pido y llevar m\u00e1s equipo se convirtiese en una necesidad. Puedes fabricar piezas de motocicleta, bidones de gas y bater\u00edas de coche de calidad 3. Fabrica piezas de motocicleta un 33\u00a0% m\u00e1s baratas.",
                                "cost": 1
                            },
                            "4": {
                                "short_description": "Mono grasiento",
                                "long_description": "Nada es mejor que la seguridad y la calidez de una bonita camioneta 4x4. Puedes fabricar piezas de camionetas 4x4, bidones de gas y bater\u00edas de coche de calidad 4. Fabrica piezas de camionetas 4x4 un 33\u00a0% m\u00e1s baratas.",
                                "cost": 1
                            },
                            "5": {
                                "short_description": "Asistente de avi\u00f3nica",
                                "long_description": "Tu necesidad de ser manitas nunca se satisface y solo un verdadero genio podr\u00eda descubrir c\u00f3mo llegar a los cielos con chatarra de hierro. Puedes fabricar piezas de giroscopios y bater\u00edas de coche de calidad 5. Fabrica piezas de giroscopios un 33\u00a0% m\u00e1s baratas.",
                                "cost": 1
                            }
                        }
                    }
                ]
            }
        ]
    }
}