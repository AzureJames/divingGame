#define SHADER_NAME WIPE_FS

precision mediump float;

uniform sampler2D uMainSampler;

uniform vec4 config;
uniform bool reveal;

varying vec2 outTexCoord;

void main ()
{
    vec2 uv = outTexCoord;

    vec4 color0;
    vec4 color1;

    if (reveal)
    {
        color0 = vec4(0);
        color1 = texture2D(uMainSampler, uv);
    }
    else
    {
        color0 = texture2D(uMainSampler, uv);
        color1 = vec4(0);
    }

    float distance = config.x;
    float width = config.y;
    float direction = config.z;
    float axis = uv.x;

    if (config.w == 1.0)
    {
        axis = uv.y;
    }

    float adjust = mix(width, -width, distance);

    float value = smoothstep(distance - width, distance + width, abs(direction - axis) + adjust);

    gl_FragColor = mix(color1, color0, value);
}
