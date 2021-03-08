import turtle
t = turtle.Turtle()


def escalier(taille, nb):
    for i in range(0, nb):
        t.left(90)
        t.forward(taille)
        t.right(90)
        t.forward(taille)
        taille -= 10


escalier(75, 16)

turtle.done()
