import React from 'react'

// @ts-ignore
import {Simulation} from 'spacekit/src/Simulation'
// @ts-ignore
import {EphemPresets} from 'spacekit/src/EphemPresets'
// @ts-ignore
import {SpaceObjectPresets} from 'spacekit/src/SpaceObject'
// @ts-ignore
import {SkyboxPresets} from 'spacekit/src/Skybox'

import {IPlanet} from './Planets'
import {IAppState} from './reducer'
import {connect} from 'react-redux'
import * as A from './actions'
import {loadModel, setModel} from './actions'


interface OwnProps {
    selectedModelPlanet?: IPlanet;
}

interface DispatchProps {
    dispatchSetModel: typeof A.setModel
    dispatchLoadModel: typeof A.loadModel
}

interface StoreProps {
    viz?: any;
}

type ModelProps = StoreProps & OwnProps & DispatchProps;

class Model extends React.Component<any> {

    shouldComponentUpdate() {
        //return false;
        return true
    }

    componentWillReceiveProps(nextProps: Readonly<ModelProps>, nextContext: any): void {
        if (this.props.viz != null) {
            const selectedObject = nextProps.selectedModelPlanet
                ? this.props.viz.getContext()
                    .simulation._subscribedObjects[nextProps.selectedModelPlanet.name]
                : nextProps.selectedModelPlanet
            this.props.viz.getViewer().followObject(selectedObject, [0.4, 0.4, 0.1])
            this.props.dispatchSetModel(this.props.viz)
        }
    }

    componentDidMount() {
        const viz = new Simulation(document.getElementById('modelId'), {
            basePath: './solarSystemData',
            unitsPerAu: 1.0,
            jdPerSecond: 15,
            camera: {
                // initialPosition: [0.4, 0.4, 0.1],
                initialPosition: [0, 0, 0],
            },
        })


        viz.createSkybox(SkyboxPresets.ESO_GIGAGALAXY)
        viz.createStars()

        viz.createObject('Sun', SpaceObjectPresets.SUN)
        viz.createAmbientLight()
        viz.createLight([0, 0, 0])


        const mercury = viz.createSphere('Mercury', {
            textureUrl: './solarSystemData/mercury.jpg',
            radius: 0.005, // Exxagerate Saturn's size
            // radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
            ephem: EphemPresets.MERCURY,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
            },
            rotation: {
                enable: true,
                speed: 1,
            },
            occludeLabels: true,
        })
        console.log('Mercury' + mercury.getId())

        const venus = viz.createSphere('Venus', {
            textureUrl: './solarSystemData/venus.jpg',
            //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
            radius: 0.01, // Exxagerate Jupiter's size
            ephem: EphemPresets.VENUS,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
                color: 0xc7c1a8,
            },
            rotation: {
                enable: true,
                speed: 0.0000002,
            },
            occludeLabels: true,
        })
        console.log('Venus' + venus.getId())

        const earth = viz.createSphere('Earth', {
            textureUrl: './solarSystemData/earth.jpg',
            //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
            radius: 0.021, // Exxagerate Jupiter's size
            ephem: EphemPresets.EARTH,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
                color: 0xc7c1a8,
            },
            rotation: {
                enable: true,
                speed: 5,
            },
            occludeLabels: true,
        })
        console.log('earth' + earth.getId())


        const mars = viz.createSphere('Mars', {
            textureUrl: './solarSystemData/mars.png',
            //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
            radius: 0.0085, // Exxagerate Jupiter's size
            ephem: EphemPresets.MARS,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
                color: 0xc7c1a8,
            },
            rotation: {
                enable: false,
                speed: 5,
            },
            occludeLabels: true,
        })
        console.log('Mars' + mars.getId())


        const jupiter = viz.createSphere('Jupiter', {
            textureUrl: './solarSystemData/jupiter.jpg',
            //radius: 71492 / 149598000, // radius in AU, so jupiter is shown to scale
            radius: 0.2, // Exxagerate Jupiter's size
            ephem: EphemPresets.JUPITER,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
                color: 0xc7c1a8,
            },
            rotation: {
                enable: true,
                speed: 2,
            },
        })
        console.log('Jupiter' + jupiter.getId())

        const saturn = viz.createSphere('Saturn', {
            textureUrl: './solarSystemData/saturn.png',
            radius: 0.09, // Exxagerate Saturn's size
            // radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
            ephem: EphemPresets.SATURN,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
            },
            rotation: {
                enable: true,
                speed: 2,
            },
            occludeLabels: true,
        })
        saturn.addRings(74270.580913, 140478.924731, './solarSystemData/saturn_rings_alpha.png')
        console.log('Saturn' + saturn.getId())

        const uranus = viz.createSphere('Uranus', {
            textureUrl: './solarSystemData/uranus.png',
            radius: 0.09, // Exxagerate Saturn's size
            // radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
            ephem: EphemPresets.URANUS,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
            },
            rotation: {
                enable: true,
                speed: 2,
            },
            occludeLabels: true,
        })

        console.log('Neptune' + uranus.getId())

        const neptune = viz.createSphere('Neptune', {
            textureUrl: './solarSystemData/neptune.png',
            radius: 0.09, // Exxagerate Saturn's size
            // radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
            ephem: EphemPresets.NEPTUNE,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
            },
            rotation: {
                enable: true,
                speed: 2,
            },
            occludeLabels: true,
            ecliptic: {
                lineColor: 0xCCCCCC,
                displayLines: false,
            },
            theme: {
                color: 0xFFFFFF,
                orbitColor: 0x888888,
            },
        })

        console.log('Neptune' + neptune.getId())

        const pluto = viz.createSphere('Pluto', {
            textureUrl: './solarSystemData/pluto.jpg',
            radius: 0.09, // Exxagerate Saturn's size
            // radius: 58232.503 / 149598000, // radius in AU, so Saturn is shown to scale
            ephem: EphemPresets.PLUTO,
            levelsOfDetail: [
                {radii: 0, segments: 64},
                {radii: 30, segments: 16},
                {radii: 60, segments: 8},
            ],
            atmosphere: {
                enable: true,
            },
            rotation: {
                enable: true,
                speed: 2,
            },
            occludeLabels: true,
        })

        console.log('Pluto' + pluto.getId())

        const selectedObject = this.props.selectedModelPlanet
            ? viz.getContext().simulation._subscribedObjects[this.props.selectedModelPlanet.name]
            : jupiter
        viz.getViewer().followObject(selectedObject, [0.3, 0.3, 0.1])
        // viz.getViewer().followObject(selectedObject, [0, 0, 0])
        this.props.dispatchSetModel(viz)
    }

    render() {
        return (
            <div id='modelId' style={{height: '517px', width: '1374px'}}>
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    selectedModelPlanet: state.selectedPlanet,
    viz: state.model
})

const mapDispatchToProps = {
    dispatchSetModel: setModel,
    dispatchLoadModel: loadModel
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Model)
