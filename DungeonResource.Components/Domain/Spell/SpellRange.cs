﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonResource.Components.Domain.Spell
{
    /// <summary>
    /// Specifies the definite range of the spell
    /// </summary>
    public enum SpellRange
    {
        Self,
        Touch,
        Close,
        Medium,
        Long
    }
}