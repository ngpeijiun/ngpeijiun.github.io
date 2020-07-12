class MathGraph {

    canvas = null
    opt = {}
    bound = {
        x1: 0, x2: 0, y1: 0, y2: 0,
        width: 0, height: 0,
        widthScale: 1, heightScale: 1,
    }

    constructor(canvas, opt) {
        this.canvas = canvas

        opt = opt || {}

        this.initPlugin(opt)
        this.initRange(opt)
        this.initGrid(opt)
        this.initAxes(opt)
        this.initBorder(opt)

        this.computeBound()

        this.render()
    }

    initPlugin(opt) {
        this.opt.getContext = this.checkTypeOr(opt.getContext, 'function',
            canvas => canvas.getContext('2d'))
    }

    initRange(opt) {
        const range = opt.range || {}

        this.opt.range = {
            x1: this.checkTypeOr(range.x1, 'number', -5),
            x2: this.checkTypeOr(range.x2, 'number', 5),
            y1: this.checkTypeOr(range.y1, 'number', -5),
            y2: this.checkTypeOr(range.y2, 'number', 5),
            keepAspectRatio: this.checkTypeOr(range.keepAspectRatio, 'boolean',
                true),
        }
    }

    initGrid(opt) {
        const grid = opt.grid || {}

        this.opt.grid = {
            enabled: this.checkTypeOr(grid.enabled, 'boolean', true),
            major: this.checkTypeOr(grid.major, 'object', {}),
            minor: this.checkTypeOr(grid.minor, 'object', {})
        }
    }

    initAxes(opt) {
        const axes = opt.axes || {}

        this.opt.axes = {
            enabled: this.checkTypeOr(axes.enabled, 'boolean', true),
            x: this.checkTypeOr(axes.x, 'object', {}),
            y: this.checkTypeOr(axes.y, 'object', {})
        }
    }

    initBorder(opt) {
        const border = opt.border || {}

        this.opt.border = {
            enabled: this.checkTypeOr(border.enabled, 'boolean', true),
            strokeStyle: this.checkTypeOr(border.strokeStyle, 'string', '#aaa'),
            lineWidth: this.checkTypeOr(border.lineWidth, 'number', 2),
        }
    }

    checkTypeOr(target, type, defaultValue) {
        if (typeof target === type) {
            return target
        } else {
            return defaultValue
        }
    }

    computeBound() {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        if (range.keepAspectRatio) {
            const aspectRatio = (range.x2 - range.x1) / (range.y2 - range.y1)
            bound.width = Math.min(canvas.height * aspectRatio, canvas.width)
            bound.height = Math.min(canvas.width / aspectRatio, canvas.height)
        } else {
            bound.width = canvas.width
            bound.height = canvas.height
        }

        bound.x1 = (canvas.width - bound.width) / 2
        bound.x2 = canvas.width - bound.x1
        bound.y1 = (canvas.height - bound.height) / 2
        bound.y2 = canvas.height - bound.y1
        bound.widthScale = bound.width / (range.x2 - range.x1)
        bound.heightScale = bound.height / (range.y2 - range.y1)
    }

    render() {
        this.background()
        if (this.opt.grid.enabled) {
            this.grid(this.opt.grid.major, this.opt.grid.minor)
        }
        if (this.opt.axes.enabled) {
            this.axes(this.opt.axes.x, this.opt.axes.y)
        }
        if (this.opt.range.keepAspectRatio) {
            this.padding()
        }
        if (this.opt.border.enabled) {
            this.border()
        }
    }

    background() {
        const canvas = this.canvas
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.fillStyle = '#fff'
        ctx.fillRect(bound.x1, bound.y1, bound.width, bound.height)

        ctx.restore()
    }

    padding() {
        const canvas = this.canvas
        const bound = this.bound

        if (canvas.width === bound.width && canvas.height === bound.height) {
            return
        }

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.fillStyle = '#f8f8f8'

        const width = bound.x1 > 0 ? bound.x1 : canvas.width
        const height = bound.y1 > 0 ? bound.y1 : canvas.width

        ctx.fillRect(0, 0, width, height)

        const x = bound.x2 < canvas.width ? bound.x2 : 0
        const y = bound.y2 < canvas.height ? bound.y2 : 0

        ctx.fillRect(x, y, width, height)

        ctx.restore()
    }

    drawArrowNormal(ctx, pt1, pt2, opt) {
        const arrow2 = {
            len: this.checkTypeOr(opt.len, 'number', 20),
            pos: this.checkTypeOr(opt.pos, 'number', 1),
            rotation: this.checkTypeOr(opt.rotation, 'number', 0),
            angle: this.checkTypeOr(opt.angle, 'number', Math.PI / 6),
        }

        const angle = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x)
        const x = pt1.x + (pt2.x - pt1.x) * arrow2.pos
        const y = pt1.y + (pt2.y - pt1.y) * arrow2.pos

        ctx.beginPath()

        ctx.moveTo(x - arrow2.len * Math.cos(angle - arrow2.angle + arrow2.rotation),
            y - arrow2.len * Math.sin(angle - arrow2.angle + arrow2.rotation));
        ctx.lineTo(x, y)
        ctx.lineTo(x - arrow2.len * Math.cos(angle + arrow2.angle + arrow2.rotation),
            y - arrow2.len * Math.sin(angle + arrow2.angle + arrow2.rotation));

        ctx.stroke()
    }

    drawArrowRightAngle(ctx, pt1, pt2, opt) {
        const arrow2 = {
            len: this.checkTypeOr(opt.len, 'number', 20),
            pos: this.checkTypeOr(opt.pos, 'number', 1),
            rotation: this.checkTypeOr(opt.rotation, 'number', 0),
            direction: this.checkTypeOr(opt.direction, 'string', 'left'),
            lineWidth: this.checkTypeOr(opt.lineWidth, 'number', 2),
        }

        ctx.lineWidth = arrow2.lineWidth

        const angle = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x)
        const x = pt1.x + (pt2.x - pt1.x) * arrow2.pos
        const y = pt1.y + (pt2.y - pt1.y) * arrow2.pos

        const diaglen = Math.sqrt(2 * Math.pow(arrow2.len, 2))

        ctx.beginPath()

        ctx.moveTo(x - arrow2.len * Math.cos(angle + arrow2.rotation),
            y - arrow2.len * Math.sin(angle + arrow2.rotation))

        if (arrow2.direction === 'left') {
            ctx.lineTo(x - diaglen * Math.cos(angle + Math.PI / 4 + arrow2.rotation),
                y - diaglen * Math.sin(angle + Math.PI / 4 + arrow2.rotation))
            ctx.lineTo(x - arrow2.len * Math.cos(angle + Math.PI / 2 + arrow2.rotation),
                y - arrow2.len * Math.sin(angle + Math.PI / 2 + arrow2.rotation))
        } else {
            ctx.lineTo(x - diaglen * Math.cos(angle - Math.PI / 4 + arrow2.rotation),
                y - diaglen * Math.sin(angle - Math.PI / 4 + arrow2.rotation))
            ctx.lineTo(x - arrow2.len * Math.cos(angle - Math.PI / 2 + arrow2.rotation),
                y - arrow2.len * Math.sin(angle - Math.PI / 2 + arrow2.rotation))
        }

        ctx.stroke()
    }

    drawArrow(ctx, pt1, pt2, arrowOpt) {
        if (Array.isArray(arrowOpt)) {
            for (const opt of arrowOpt) {
                this.drawArrow(ctx, pt1, pt2, opt)
            }

            return
        }

        ctx.save()

        switch (arrowOpt.type) {
            case 'rightAngle':
                this.drawArrowRightAngle(ctx, pt1, pt2, arrowOpt)
                break
            default:
                this.drawArrowNormal(ctx, pt1, pt2, arrowOpt)
                break
        }

        ctx.restore()
    }

    drawLine(ctx, pt1, pt2, opt) {
        ctx.beginPath()

        ctx.moveTo(pt1.x, pt1.y)
        ctx.lineTo(pt2.x, pt2.y)

        ctx.stroke()

        if (typeof opt === 'object' && 'arrow2' in opt) {
            this.drawArrow(ctx, pt1, pt2, opt.arrow2)
        }
    }

    gridLines(opt) {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.strokeStyle = opt.strokeStyle
        ctx.lineWidth = opt.lineWidth

        let start, end

        // X lines
        start = Math.ceil(range.x1 / opt.scale)
        end = Math.floor(range.x2 / opt.scale)
        for (let xFn = start; xFn <= end; xFn++) {
            const x = bound.x1 + (xFn * opt.scale - range.x1) * bound.widthScale
            this.drawLine(ctx, { x, y: bound.y1 }, { x, y: bound.y2 })
        }

        // Y lines
        start = Math.ceil(range.y1 / opt.scale)
        end = Math.floor(range.y2 / opt.scale)
        for (let yFn = start; yFn <= end; yFn++) {
            const y = bound.y1 + (yFn * opt.scale - range.y1) * bound.heightScale
            this.drawLine(ctx, { x: bound.x1, y }, { x: bound.x2, y })
        }

        ctx.restore()
    }

    grid(major = null, minor = null) {
        major = major || {}
        minor = minor || {}

        const majorOpt = {
            enabled: this.checkTypeOr(major.enabled, 'boolean', true),
            scale: major.scale || 1,
            strokeStyle: major.strokeStyle || '#ddd',
            lineWidth: major.strokeStyle || 2,
        }
        const minorOpt = {
            enabled: this.checkTypeOr(minor.enabled, 'boolean', true),
            scale: minor.scale || 0.2,
            strokeStyle: minor.strokeStyle || '#eee',
            lineWidth: minor.lineWidth || 1,
        }

        if (minorOpt.enabled) {
            this.gridLines(minorOpt)
        }
        if (majorOpt.enabled) {
            this.gridLines(majorOpt)
        }
    }

    axis(opt) {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.strokeStyle = opt.strokeStyle
        ctx.lineWidth = opt.lineWidth

        if (opt.axis === 'x') {
            const intersectY = bound.y1 + (opt.intersect - range.y1) * bound.heightScale
            const x1 = opt.range ? bound.x1 + (opt.range[0] - range.x1) * bound.widthScale : bound.x1
            const x2 = opt.range ? bound.x1 + (opt.range[1] - range.x1) * bound.widthScale : bound.x2
            const pt1 = { x: x1, y: intersectY }
            const pt2 = { x: x2, y: intersectY }
            this.drawLine(ctx, pt1, pt2, {
                arrow2: { len: 20, angle: Math.PI / 6 },
            })
        } else {
            const intersectX = bound.x1 + (opt.intersect - range.x1) * bound.widthScale
            const y1 = opt.range ? bound.y2 - (opt.range[0] - range.y1) * bound.heightScale : bound.y2
            const y2 = opt.range ? bound.y2 - (opt.range[1] - range.y1) * bound.heightScale : bound.y1
            const pt1 = { x: intersectX, y: y1 }
            const pt2 = { x: intersectX, y: y2 }
            this.drawLine(ctx, pt1, pt2, {
                arrow2: { len: 20, angle: Math.PI / 6 },
            })
        }

        ctx.restore()
    }

    axes(x = null, y = null) {
        x = x || {}
        y = y || {}

        const xOpt = {
            axis: 'x',
            scale: x.scale || 1,
            intersect: x.intersect || 0,
            range: x.range || false,
            strokeStyle: x.strokeStyle || '#888',
            lineWidth: x.lineWidth || 4,
        }
        const yOpt = {
            axis: 'y',
            scale: y.scale || 1,
            intersect: y.intersect || 0,
            range: y.range || false,
            strokeStyle: y.strokeStyle || '#888',
            lineWidth: y.lineWidth || 4,
        }

        this.axis(xOpt)
        this.axis(yOpt)
    }

    text(input, pt, opt) {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.font = `${opt.size}px ${opt.font}`
        ctx.textAlign = opt.textAlign
        ctx.textBaseline = opt.textBaseline
        ctx.fillStyle = '#fff'

        const x = bound.x1 + (pt.x - range.x1) * bound.widthScale
        const y = bound.y2 - (pt.y - range.y1) * bound.heightScale

        const text = ctx.measureText(input)

        ctx.fillRect(x - text.width * 0.65, y - opt.size * 0.65, text.width * 1.3, opt.size * 1.3)

        ctx.fillStyle = '#000'

        ctx.fillText(input, x, y)

        ctx.restore()
    }

    line(pt1, pt2, opt) {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.strokeStyle = opt.strokeStyle
        ctx.lineWidth = opt.lineWidth

        const x1 = bound.x1 + (pt1.x - range.x1) * bound.widthScale
        const y1 = bound.y2 - (pt1.y - range.y1) * bound.heightScale
        const x2 = bound.x1 + (pt2.x - range.x1) * bound.widthScale
        const y2 = bound.y2 - (pt2.y - range.y1) * bound.heightScale

        this.drawLine(ctx, { x: x1, y: y1 }, { x: x2, y: y2 }, opt)

        ctx.restore()
    }

    plot(fn, fnRange, strokeStyle = '#000') {
        const canvas = this.canvas
        const range = this.opt.range
        const bound = this.bound

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = 4

        ctx.beginPath()

        const x1 = fnRange ? bound.x1 + (fnRange[0] - range.x1) * bound.widthScale : bound.x1
        const x2 = fnRange ? bound.x1 + (fnRange[1] - range.x1) * bound.widthScale : bound.x2

        for (let x = x1; x < x2; x++) {
            const xFn = (x - bound.x1) / bound.widthScale + range.x1
            const yFn = fn(xFn)

            const y = bound.y2 - (yFn - range.y1) * bound.heightScale

            if (x == 0) {
                ctx.moveTo(x, y)
            } else {
                ctx.lineTo(x, y)
            }
        }

        ctx.stroke()

        ctx.restore()
    }

    border() {
        const canvas = this.canvas
        const border = this.opt.border

        const ctx = this.opt.getContext(canvas)

        ctx.save()

        ctx.strokeStyle = border.strokeStyle
        ctx.lineWidth = border.lineWidth

        ctx.strokeRect(0, 0, canvas.width, canvas.height)

        ctx.restore()
    }

}
