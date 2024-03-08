<h1 style="color: #ccc">Web Canvas API</h1>

# Basic Usage

Apr 2, 2024

## The Canvas Element

1.  The `<canvas>` is a simple HTML element that has only two attributes: width and height. If these are not specified, the `<canvas>` defaults to a width of $300$ pixels and a height of $150$ pixels.

2.  The element can be sized arbitarily using CSS. However, during rendering, the image is scaled to fit its layout size. If the CSS sizing does not respect the ratio of the initial canvas, the image will appear distorted.

3.  The `<canvas>` element creates a fixed-size drawing surface that exposes one or more rendering contexts. We focus on the 2D rendering context here, called `CanvasRenderingContext2D`.

    <span class="special-label">A Simple Example.</span>

    ```html
    <canvas id="tutorial" style="border: 1px solid #ccc"
        width="150" height="150"></canvas>
    <script>
        const canvas = document.getElementById('tutorial')
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = "rgb(200 0 0)"
        ctx.fillRect(10, 10, 50, 50)

        ctx.fillStyle = "rgb(0 0 200 / 50%)"
        ctx.fillRect(30, 30, 50, 50)
    </script>
    ```

    <canvas id="tutorial" style="border: 1px solid #ccc" width="150" height="150"></canvas>

<script>
    const canvas = document.getElementById('tutorial')
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = "rgb(200 0 0)"
    ctx.fillRect(10, 10, 50, 50)

    ctx.fillStyle = "rgb(0 0 200 / 50%)"
    ctx.fillRect(30, 30, 50, 50)
</script>
