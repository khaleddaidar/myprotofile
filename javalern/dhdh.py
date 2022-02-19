
from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController


def getnew():
    if held_keys['a']:
        test_square.x -= 1 * time.dt

h = 120
s = 90
v = 240
app = Ursina()
test_square = Entity(model="circle",
color =color.color(h, s, v))

app.run()
