
<template>
    <svg class="word-cloud" :width="width" :height="height">
        <g ref="content" :transform="`translate(${width/2}, ${height/2})`"></g>
    </svg>
</template>

<script>
import * as d3 from 'd3';
import cloud from 'd3-cloud';
const MAX = 50; // Max font size
const MIN = 20; // Min font size
const defaultColors = [ '222222', '777777', '337ab7',  '5cb85c',  '5bc0de', 'f0ad4e', 'd9534f'];

export default {
    name: 'WordCloud',
    props: {
        data: { type: Array, required: true },
    },
    data() {
        return {
            layout: {},
            width: 240,
            height: 240,
        }
    },
    computed: {
        words() {
            return this.data.map(item => this.process(item))
        },
        counts() {
            return this.data.map(item => item.count)
        },
        min() {
            return Math.min(...this.counts)
        },
        max() {
            return Math.max(...this.counts)
        },
        avg() {
            return this.counts.reduce((total, item) => total + item, 0) / this.counts.length
        }
    },
    mounted() {
        this.layout = cloud()
            .size([this.width, this.height])
            .words(this.words)
            .padding(5)
            .rotate((item) => item.rotate === 0 ? 0 : ~~(Math.random() * 2) * 90)
            .fontSize(item => item.size)
            .on('end', this.draw)

        this.layout.start()
    },
    methods: {
        draw(words) {
            const svg = d3.select(this.$refs.content)
                .selectAll('text')
                .data(words)
                .enter()
                .append('text')
                .style('font-size', item => `${item.size}px`)
                .style('font-family', 'Impact')
                .style('fill', item => item.color)
                .attr('text-anchor', 'middle')
                .attr('transform', item => `translate(${[item.x, item.y]}) rotate(${item.rotate})`)
                .text(item => item.text)
        },
        process(item) {
            return {
                ...item,
                size: item.count ? this.weightedSize(item.count) : this.avg,
                color: item.color || this.randomColor()
            }
        },
        randomColor() {
            const randomIndex = Math.floor(Math.random() * defaultColors.length)

            return defaultColors[randomIndex]
        },
        /** Scale counts to MIN..MAX based on their relative value */
        weightedSize(count) {
            if (this.max == this.min) {
                return MIN + (MAX - MIN) / 2
            }

            return  MIN + (MAX - MIN) * (count - this.min) / (this.max - this.min) 
        } 
    }
}
</script>
