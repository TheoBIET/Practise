import random

MAX = 100
MIN = 0
MAGIC_NUMBER = random.randint(MIN, MAX)
life = 10
nb = 0

while not nb == MAGIC_NUMBER and not life == 0:
    nb = input(f'Entrez un nombre entre {str(MIN)} et {str(MAX)} :')
    try:
        if int(nb) == MAGIC_NUMBER:
            print('Vous avez gagné!')
            break
        elif int(nb) > MAGIC_NUMBER: print('Le nombre est plus petit!')
        else: print('Le nombre est plus grand!')
        life -= 1
        print(f'Il vous reste {str(life)} vies!')
    except ValueError: print('Vous n\'avez pas entré un nombre!')
    else: 
        if int(nb) > MAX or int(nb) < MIN:
            print('ERREUR! Le nombre doit être entre 0 et 100')
            nb = 0

if life == 0: print(f'PERDU! Vous n\'avez plus de vies! Le nombre magique était {MAGIC_NUMBER}')