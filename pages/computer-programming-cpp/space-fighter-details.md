---
title: Space Fighter Details
subtitle: Computer Programming C++
hideNav: false

live: https://fvtc.software/appel/computer-programming-cpp/space-fighter-details
---

# Space Fighter Details

In this unit, I am going to cover some parts of the game in greater detail. You do not need to go through all of these items! If a topic relates to the modifications you are making, then you should go through that topic.

# Vectors, Position, and Movement

In mathematics, a vector is a quantity that has both magnitude and direction. In our game, we use vectors to represent the position and movement of objects. A vector is represented by two numbers, x and y, which are the coordinates of the vector in 2D space.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Vectors are assumed to be relative to the origin (0,0) of the game world. The origin is the top-left corner of the game window. The x-axis increases to the right, and the y-axis increases downward. This is similar to the coordinate system used in mathematics, but the y-axis is flipped.

## Position

The position of an object is represented by a vector. The position vector is the location of the object in the game world. The position vector is used to draw the object on the screen and to check for collisions with other objects.

In the code that we looked at in the video, the enemy ship positions were calculated when the level content was loaded.

```cpp
	const int COUNT = 21; // number of enemies

	// enemy ships will be placed above the screen at
	// these x positions (relative to the screen width)
	// so 0.5 is the center of the screen
	double xPositions[COUNT] =
	{
		0.25, 0.2, 0.3,
		0.75, 0.8, 0.7,
		0.3, 0.25, 0.35, 0.2, 0.4,
		0.7, 0.75, 0.65, 0.8, 0.6,
		0.5, 0.4, 0.6, 0.45, 0.55
	};
	
	// this is the delay between each enemy ship
	// for example, the second enemy ship will appear
	// 0.25 seconds after the first enemy ship
	double delays[COUNT] =
	{
		0.0, 0.25, 0.25,
		3.0, 0.25, 0.25,
		3.25, 0.25, 0.25, 0.25, 0.25,
		3.25, 0.25, 0.25, 0.25, 0.25,
		3.5, 0.3, 0.3, 0.3, 0.3
	};

	float delay = 3.0; // start delay
	Vector2 position; // position of the enemy ship

	for (int i = 0; i < COUNT; i++)
	{
		delay += delays[i]; // accumulate the delay

		// calculate the position of the enemy ship
		double x = xPositions[i] * Game::GetScreenWidth();
		double y = -pTexture->GetCenter().Y; // above the screen
		position.Set(x, y); // set the position to the calculated x and y

		BioEnemyShip *pEnemy = new BioEnemyShip(); // create a new enemy ship
		pEnemy->SetTexture(pTexture); // set the texture of the enemy ship
		pEnemy->SetCurrentLevel(this); // set the current level of the enemy ship
		pEnemy->Initialize(position, (float)delay); // initialize the enemy ship
		AddGameObject(pEnemy); // add the enemy ship to the game object list
	}
```

## Movement

The movement of an object is represented by a vector. The movement vector is the direction and speed at which the object is moving. The movement vector is used to update the position of the object in each frame of the game.

As you saw in the video, we can add vectors together by adding their x and y components. This is how we calculate the new position of an object based on its movement vector.

Here is the update method for the enemy ship:

```cpp

void BioEnemyShip::Update(const GameTime& gameTime)
{
	if (IsActive()) // don't move unless the ship is active
	{
		// calculate the x position (sin wave), based on the ship's speed
		// and how much time has passed since the last frame
		// 1.4 is a constant to make the ship move further left and right
		float x = sin(gameTime.GetTotalTime() * Math::PI + GetIndex());
		x *= GetSpeed() * gameTime.GetElapsedTime() * 1.4f;

		// calculate the y position (downward movement), based on the ship's speed
		float y = GetSpeed() * gameTime.GetElapsedTime();

		// translate the position by the calculated x and y
		TranslatePosition(x, y);

		// if the ship is off the screen, deactivate it
		if (!IsOnScreen()) Deactivate();
	}

	// call the base class update method
	EnemyShip::Update(gameTime);
}
```

`TranslatePosition` is a method that moves the ship by the specified x and y amounts. It's defined in the `GameObject` class:

```cpp
void GameObject::TranslatePosition(const float x, const float y)
{	
	// add the x and y to the current position
	SetPosition(m_position.X + x, m_position.Y + y);
}
```

# Collision Detection

# Game Object Activation

# Object Pooling and Recycling

# Boolean Methods (Flags)

# Game Timing and Frame Rate